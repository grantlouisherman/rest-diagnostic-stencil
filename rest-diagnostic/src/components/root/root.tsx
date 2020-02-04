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
    let FILE_CONTENTS = yaml.load(event.detail);
    FILE_CONTENTS = FILE_CONTENTS.calls;
    for(let key in FILE_CONTENTS){
      FILE_CONTENTS[key].fileId = key
    }
    this.fileContents = FILE_CONTENTS;
  }

  @Listen('formChanged')
  formChangeHanlder(event: CustomEvent){
    const { id, value} = event.detail;
    const lookUpValues:string  = id.split('-');
    const lookUpId: string = lookUpValues[0];
    const lookUpType = lookUpValues[1];
    this.fileContents[lookUpId][lookUpType] = value;
    console.log(this.fileContents);
  }

  renderFileUpload(){
    return <file-upload></file-upload>
  }

  downLoadHandler(){
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
    const calls = this.fileContents.map(call => (
      <diagnose-item {...call}></diagnose-item>
    ));
    return [ 
      ...calls,
      <button class="ui primary basic button" onClick={this.downLoadHandler.bind(this)}>Download Report</button>
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
