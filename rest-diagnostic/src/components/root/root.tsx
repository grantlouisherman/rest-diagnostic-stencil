import { Component, h, Listen } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "root.css",
  shadow: true
})
export class Root {
  @Listen('upoadCompleteEvent')
  uploadFileHanlder(event: CustomEvent){
    console.log(event.detail)
  }
  render() {
    return (
      <div class="ui grid">
        <file-upload></file-upload>
        
      </div>
    );
  }
}
