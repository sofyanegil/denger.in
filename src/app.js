import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

import './script/components/app-bar';
import main from './script/view/main';

document.addEventListener('DOMContentLoaded', main);

$('#searchBtn').click(() => {
  $('.track-list').html(' ');
  const keyword = $('#searchInput').val();
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search/track',
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '0cdbbf3c74mshaa73fb5282ec156p1c0bebjsn8f9dcee65b1b',
    },
    data: {
      q: keyword,
    },
  };
  $.ajax(settings)
    .done((response) => {
      let musik = response.data;
      $('#track-list').html('');
      $.each(musik, (i, data) => {
        $('#track-list').append(`
          <div class="card m-3 col-md-3 col-sm-12">
            <img src="${data.album.cover_medium}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">${data.title}</h4>
              <p class="card-text">${data.album.title}.</p>
              <div class="d-flex flex-row justify-content-between">
                <h3 class="">${data.artist.name}</h3>
               <img class="rounded-circle border border-3 border-alert-info" width="30" height="30" src="${data.artist.picture_small}" class="card-img-top" alt="..." />
              </div>
              <audio controls class="justify-content-center mx-auto">
                <source src="${data.preview}" type="audio/mpeg">
              </audio>
              <a href="${data.link}" target=”_blank” rel=”noreferrer noopener” class="btn btn-success w-100">Dengerin di Deezer</a>
            </div>
          </div>
          `);
      });
    })
    .fail((err) => {
      console.log(err);
    });
});
