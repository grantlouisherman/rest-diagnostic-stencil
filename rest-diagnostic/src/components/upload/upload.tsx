import { Component, Host, h, State } from "@stencil/core";

@Component({
  tag: "file-upload",
  styleUrl: "upload.css",
  shadow: true
})
export class Upload {
  @State() fileContents: string | ArrayBuffer;

  setInternalState(file){
    this.fileContents = file
  }
  handleFileUpload(event) {
    var reader = new FileReader();
    reader.onload = (event) => {
        var contents = event.target.result;
        this.fileContents = contents;
        console.log("File contents: " + contents);
    };
    
    reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };
    
    reader.readAsText(event.target.files[0]);
  }
  render() {
    return (
      <Host>
        <slot>
          <div class="ui placeholder segment">
            <div class="ui icon header">
              <i class="file outline icon"></i>
              Please Upload Instructions
            </div>
            <div class="ui primary button">
              <input id="the-file-input" type="file" onChange={this.handleFileUpload} />
            </div>
            {this.fileContents}
          </div>
        </slot>
      </Host>
    );
  }
}
