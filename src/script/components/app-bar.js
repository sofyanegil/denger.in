import logo from "./../../images/logo.svg";
class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    app-bar a {
      font-weight: bold;
    }
    nav{
      background-color: #1DB954;
    }
    </style>
    <nav class="navbar fixed-top navbar-dark">
      <div class="container-fluid justify-content-center ">
        <a class="navbar-brand" href="/">
          <img src="${logo}" alt="" width="30" height="24" class="d-inline-block align-text-top">
          Denger.in
        </a>
      </div>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
