import { Component, h, Listen, State } from "@stencil/core";
import yaml from 'js-yaml'
import { shouldConstructFetchRequest } from '../../utils/utils'

@Component({
  tag: "app-root",
  styleUrl: "root.css",
  shadow: true
})
export class Root {
  @State() fileContents: any;
  @State() diagnosticCompleted: boolean = false;

  @Listen('upoadCompleteEvent')
  uploadFileHanlder(event: CustomEvent) {
    let FILE_CONTENTS = yaml.load(event.detail);
    FILE_CONTENTS = FILE_CONTENTS.calls;
    for (let key in FILE_CONTENTS) {
      FILE_CONTENTS[key].fileId = key
    }
    this.fileContents = FILE_CONTENTS;
  }

  @Listen('formChanged')
  formChangeHanlder(event: CustomEvent) {
    const { id, value } = event.detail;
    const lookUpValues: string = id.split('-');
    const lookUpId: string = lookUpValues[0];
    const lookUpType = lookUpValues[1];
    this.fileContents[lookUpId][lookUpType] = value;
  }

  renderFileUpload() {
    return <file-upload></file-upload>
  }

  downLoadHandler() {
    if (!this.diagnosticCompleted) {
      alert("You still need to run your calls");
      return;
    }
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

  async testCalls() {
    Promise.all(this.fileContents.map(shouldConstructFetchRequest))
      .then((calls: any) => {
        for (let index in calls) {
          const currCall = calls[index];
          const callIndex = currCall.fileId;
          const fileContent = this.fileContents[callIndex];
          fileContent.response = currCall;
        }
      })
      .then(() => {
        this.diagnosticCompleted = true;
      })
      .catch(err => console.log(err))
  }

  Reset(){
    this.fileContents = null;
  }
  renderButtons() {
    return [
      <button class="ui primary basic button"
      onClick={this.Reset.bind(this)}>
      Reset
      </button>,
      <button class="ui primary basic button"
        onClick={this.downLoadHandler.bind(this)}>
        Download Report
        </button>,
      <button class="ui primary basic button"
        onClick={this.testCalls.bind(this)}
      >
        Run Calls
      </button>
    ]
  }
  renderDiagnosticItems() {
    const calls = this.fileContents.map(call => (
      <diagnose-item {...call}></diagnose-item>
    ));
    return [
      this.renderButtons(),
      ...calls
    ]
  }

  render() {
    return (
      <div class="ui container">
        {this.fileContents ? this.renderDiagnosticItems() : this.renderFileUpload()}
      </div>
    );
  }
}
