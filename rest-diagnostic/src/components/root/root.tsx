import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "root.css",
  shadow: true
})
export class Root {
  render() {
    return (
      <div class="ui grid">
        <file-upload></file-upload>
        
      </div>
    );
  }
}
