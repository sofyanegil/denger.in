import hero from "./../../images/hero.png";

class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .hero-image img{
        width: 100vw;
      }
      .hero-text h1{
        font-size: 4vw;
        font-weight: bold;
      }
      @media only screen and (max-width: 600px) {
        .hero-text h1 {
          font-size: 10vw;
        }
      }
    </style>
    <div class="d-flex justify-content-center align-items-center flex-column flex-md-row p-lg-5">
      <div class="hero-image">
        <img src="${hero}" alt="Woman Listening Music" class="img-fluid"/>
      </div>
      <div class="hero-text p-3">
        <h1 class="text-center">
          Jelajahi dan pratinjau musikmu dengan denger.in 
        </h1>
        <div class="search-area">
            <div class="input-group mb-3 d-flex flex-column gap-2 justify-content-center align-content-center">
              <input type="text" class="form-control w-75 text-center" id="searchInput" placeholder="Cari disini" autocomplete="off">
              <button class="btn btn-success rounded-3 w-25 m-auto " type="button" id="searchBtn">Cari</button>
            </div>
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define("hero-section", HeroSection);
