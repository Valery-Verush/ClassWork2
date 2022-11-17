import { Component } from "./core";
import "./components/Button/Button";
import "./components/MenuList/MenuList.js";
import "./components/Menu/Menu.js";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpenMenu: true,
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
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2">
          <my-button eventtype="menu" content="menu" classname="btn btn-outline-primary"></my-button>
        </div>
      </div>
    </div>
    <my-menu isopen='${this.state.isOpenMenu}'></my-menu>
  `;
  }
}

customElements.define("my-app", App);
