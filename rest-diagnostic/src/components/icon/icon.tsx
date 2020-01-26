import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "component-icon",
  styleUrl: "icon.css",
  shadow: true
})
export class Icon {
  @Prop() responseStatus: number;

  renderIcon() {
    if (this.responseStatus) {
      return (
        <div>{`Response Code: ${this.responseStatus}`}</div>
      );
    }
    return null;
  }
  
  render() {
    return (
      <Host>
        <slot>{this.renderIcon()}</slot>
      </Host>
    );
  }
}
