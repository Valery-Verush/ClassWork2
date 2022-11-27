import { Component } from "../../core";

export class MenuList extends Component {
  static get observedAttributes() {
    return ["items"];
  }

  render() {
    this.items = JSON.parse(this.props.items);
    return this.items.map((item) => {
      return `<a class="text-center col-12 list-group-item" target="_blank" type="button" href="${item.href}">${item.label}</a>`;
    });
  }
}

customElements.define("my-menu-list", MenuList);
