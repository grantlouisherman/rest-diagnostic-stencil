import { Component, h, Listen } from "@stencil/core";
import yaml from 'js-yaml'


@Component({
  tag: "app-root",
  styleUrl: "root.css",
  shadow: true
})
export class Root {
  @Listen('upoadCompleteEvent')
  uploadFileHanlder(event: CustomEvent){
    console.log(yaml.load(event.detail))
  }
  render() {
    return (
      <div class="ui grid">
        <file-upload></file-upload>
        
      </div>
    );
  }
}
