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

  downloadHanlder(){
    const content = JSON.stringify(this.fileContents, undefined, 2);
    const BLOB = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = window.URL || window.webkitURL;
    const link = url.createObjectURL(BLOB);
    var a = document.createElement("a");
    a.download = "Report.json";
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  renderDiagnosticItems(){
    const calls = this.fileContents.calls.map(call => (
      <diagnose-item {...call}></diagnose-item>
    ))
    return [ 
      ...calls,
      <button class="ui primary basic button" onClick={this.downloadHanlder.bind(this)}>Download Report</button>
    ]
  }

  render() {
    return (
      <div class="ui container">
        { this.fileContents ? this.renderDiagnosticItems() : this.renderFileUpload() }
      </div>
    );
  }
}
