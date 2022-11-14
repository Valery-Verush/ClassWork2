import { Component } from "./core";
import "./components/Button/Button";
import "./components/Menu/Menu.js";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpenMenu: false,
    };
  }

  registerEvents() {
    this.addEventListener("menu", () => {
      this.setState((state) => {
        return {
          ...state,
          isOpenMenu: !state.isOpenMenu,
        };
      });
    });
  }

  render() {
    return `
    ${
      this.state.isOpenMenu &&
      `
      <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" aria-modal="true" role="dialog">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Menu</h5>
        <my-button type="button" class="btn-close"  eventtype='menu' content="" data-bs-dismiss="offcanvas" aria-label="Close"></my-button>
       </div>
        <div class="list-group">
          <my-menu></my-menu>
        </div>
      </div>
      <div class="offcanvas-backdrop fade show"></div>
      `
    }
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2"><my-button eventtype='menu' content="menu" classname="btn btn-outline-primary"></my-button>
      </div>
    </div>
  </div>
  `;
  }
}

customElements.define("my-app", App);
