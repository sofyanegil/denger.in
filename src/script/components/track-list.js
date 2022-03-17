class TrackList extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="text-center">Track List</h1>
    <div class="d-flex flex-wrap justify-content-center" id="track-list">
    </div>
    `;
  }
}

customElements.define("track-list", TrackList);
