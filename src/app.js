import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import "./script/components/app-bar";
import main from "./script/view/main";

document.addEventListener("DOMContentLoaded", main);

$("#searchBtn").click(() => {
  $(".track-list").html(" ");
  const keyword = $("#searchInput").val();
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://deezerdevs-deezer.p.rapidapi.com/search/track",
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "0cdbbf3c74mshaa73fb5282ec156p1c0bebjsn8f9dcee65b1b",
    },
    data: {
      q: keyword,
    },
  };
  $.ajax(settings)
    .done((response) => {
      let musik = response.data;
      console.log(musik);

      $.each(musik, function (i, data) {
        $("#track-list").append(`
          <div class="card m-3">
            <img src="${data.album.cover_medium}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.artist.name}.</p>
              <audio controls>
                <source src="${data.preview}" type="audio/mpeg">
              </audio>
            </div>
          </div>
          `);
      });
    })
    .fail((err) => {
      console.log(err);
    });
});
