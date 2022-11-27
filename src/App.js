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
    this.props = {
      items: [
        {
          label: "link 1",
          href: "https://www.google.by/",
        },
        {
          label: "link 2",
          href: "https://www.google.by/",
        },
        {
          label: "link 3",
          href: "https://www.google.by/",
        },
        {
          label: "link 4",
          href: "https://www.google.by/",
        },
      ],
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
    <my-menu items='${JSON.stringify(this.props.items)}' isopen='${
      this.state.isOpenMenu
    }'></my-menu>
  `;
  }
}

customElements.define("my-app", App);
