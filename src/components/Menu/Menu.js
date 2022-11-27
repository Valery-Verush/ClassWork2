import { Component } from "../../core";
import "../MenuList/MenuList.js";

export class Menu extends Component {
  static get observedAttributes() {
    return ["isopen", "items"];
  }

  render() {
    const isOpen = this.props.isopen === "true" ? true : false;
    return `
    <div class="offcanvas offcanvas-start ${
      isOpen && `show`
    }" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title">Menu</h5>
            <my-button type="button" classname="btn-close"  eventtype='menu' content="" data-bs-dismiss="offcanvas" aria-label="Close"></my-button>
        </div>
        <div class="list-group">
            <my-menu-list items='${this.props.items}'></my-menu-list>
        </div>
    </div>
     ${isOpen ? `<div class="offcanvas-backdrop fade show"></div>` : ""}
    `;
  }
}

customElements.define("my-menu", Menu);
