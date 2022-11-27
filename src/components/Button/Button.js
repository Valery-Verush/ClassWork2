import { Component } from "../../core";
import "./Button.scss";

export class Button extends Component {
  onClick() {
    this.dispatch(this.props.eventtype);
  }

  componentDidMount() {
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onClick);
  }

  static get observedAttributes() {
    return ["content", "classname", "eventtype"];
  }

  render() {
    const { content, classname } = this.props;
    return `
        <button type="button" class="btn ${classname}">${content}</button>
        `;
  }
}

customElements.define("my-button", Button);
