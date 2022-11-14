import { Component } from "../../core";

export class Menu extends Component {
  constructor() {
    super(),
      (this.items = [
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
      ]);
  }
  componentDidMount() {}
  render() {
    return this.items.reduce((accum, item, index) => {
      return accum.concat(
        `
        <a class="text-center col-12 list-group-item" target="_blank" type="button" href="${this.items[index].href}">${this.items[index].label}</a>
        `
      );
    }, ``);
  }
}

customElements.define("my-menu", Menu);
