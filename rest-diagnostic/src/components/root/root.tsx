import { Component, h, Listen, State } from "@stencil/core";
import yaml from "js-yaml";
import { shouldConstructFetchRequest } from "../../utils/utils";

@Component({
  tag: "app-root",
  styleUrl: "root.css",
  shadow: true
})
export class Root {
  @State() fileContents: any;
  @State() diagnosticCompleted: boolean = false;

  @Listen("upoadCompleteEvent")
  uploadFileHanlder(event: CustomEvent) {
    let FILE_CONTENTS = yaml.load(event.detail);
    FILE_CONTENTS = FILE_CONTENTS.calls;
    for (let key in FILE_CONTENTS) {
      FILE_CONTENTS[key].fileId = key;
      FILE_CONTENTS[key].checkbox = true;
    }
    this.fileContents = FILE_CONTENTS;
  }

  @Listen("formChanged")
  formChangeHanlder(event: CustomEvent) {
    const { id, value } = event.detail;
    const lookUpValues: string = id.split("-");
    const lookUpId: string = lookUpValues[0];
    const lookUpType: any = lookUpValues[1];
    if (lookUpType === "checkbox") {
      this.fileContents[lookUpId][lookUpType] = !this.fileContents[lookUpId][
        lookUpType
      ];
    } else {
      this.fileContents[lookUpId][lookUpType] = value;
    }
  }

  renderFileUpload() {
    const EXAMPLE = {
        "calls":[
        {
          "headers": {},
          "url": "https://jsonplaceholder.typicode.com/posts",
          "body": "",
          "method": "GET"
        },
        {
          "headers": { "account_token": "MOCK"},
          "url": " https://jsonplaceholder.typicode.com/posts",
          "body": "",
          "method": "GET"
        }
      ]
    }
    return [
      <file-upload></file-upload>,
      <button class="ui primary basic button" 
        onClick={() => ( this.downLoadHandler.apply(this, ['Example.json', EXAMPLE]) )}
      >
      Download Example File
    </button> 
    ];
  }

  downLoadHandler(downloadFileName, fileContent) {
    const content = JSON.stringify(fileContent, undefined, 2);
    const BLOB = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = window.URL || window.webkitURL;
    const link = url.createObjectURL(BLOB);
    var a = document.createElement("a");
    a.download = downloadFileName;
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  testCalls() {
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
      .catch(() => {
        this.diagnosticCompleted = true;
      });
  }

  Reset() {
    this.fileContents = null;
    this.diagnosticCompleted = false;
  }

  renderButtons() {
    return (
      <div class="button-container">
        <button class="ui primary basic button" onClick={this.Reset.bind(this)}>
          Reset
        </button>
        {
          this.diagnosticCompleted ?
          <button
          class="ui primary basic button"
          onClick={() => (this.downLoadHandler.apply(this, ['Report.json', this.fileContents]))}
          >
          Download Report
        </button> :
          null
        }
        <button
          class="ui primary basic button"
          onClick={this.testCalls.bind(this)}
        >
          Run Calls
        </button>
      </div>
    );
  }
  renderDiagnosticItems() {
    const calls = this.fileContents.map(call => (
      <diagnose-item {...call}></diagnose-item>
    ));
    return [this.renderButtons(), ...calls];
  }

  render() {
    return (
      <div class="ui container">
        {this.fileContents
          ? this.renderDiagnosticItems()
          : this.renderFileUpload()}
      </div>
    );
  }
}
