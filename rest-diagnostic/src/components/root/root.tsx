import { Component, h, Listen, State } from "@stencil/core";
import yaml from 'js-yaml'


@Component({
  tag: "app-root",
  styleUrl: "root.css",
  shadow: true
})
export class Root {
  @State() fileContents: any;

  @Listen('upoadCompleteEvent')
  uploadFileHanlder(event: CustomEvent){
    this.fileContents = yaml.load(event.detail);
  }

  renderFileUpload(){
    return <file-upload></file-upload>
  }

  renderDiagnosticItems(){
    const calls = this.fileContents.calls.map(call => (
      <diagnose-item {...call}></diagnose-item>
    ))
    return [ ...calls ]
  }

  render() {
    return (
      <div class="ui container">
        { this.fileContents ? this.renderDiagnosticItems() : this.renderFileUpload() }
      </div>
    );
  }
}
