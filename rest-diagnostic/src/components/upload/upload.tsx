import { Component, Host, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "file-upload",
  styleUrl: "upload.css",
  shadow: true
})
export class Upload {  
  @Event({ 
    eventName: 'upoadCompleteEvent',
    composed: true,
    cancelable: true,
    bubbles: true
  }) upoadCompleteEvent: EventEmitter<string | ArrayBuffer>;
    
  handleFileUpload(files:FileList) {
    var reader = new FileReader();
    reader.onload = (event) => {
        var contents = event.target.result;
        this.upoadCompleteEvent.emit(contents);
    };
    
    reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsText(files[0]);
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
              <input id="the-file-input" type="file" onChange={($event: any) => this.handleFileUpload($event.target.files)} />
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
