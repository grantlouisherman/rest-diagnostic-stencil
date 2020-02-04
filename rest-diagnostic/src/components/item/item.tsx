import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";

export interface FormEvent {
  id:string,
  value:string
}

@Component({
  tag: "diagnose-item",
  styleUrl: "item.css",
  shadow: true
})
export class Item {
  @Prop() fileId: string;
  @Prop() url: string;
  @Prop() headers: any;
  @Prop() method: string;

  @Event({ 
    eventName: 'formChanged',
    composed: true,
    cancelable: true,
    bubbles: true
  }) formChanged: EventEmitter<FormEvent>;
  
  formChangeHandler(event){
    const id = event.target.id;
    const value = event.target.value;
    const data : FormEvent = {id, value};
    this.formChanged.emit(data);
  }
  
  render() {
    return (
      <Host>
        <slot>
          <form class="ui form">
            <div class="field">
              <label class="ui horizontal label">Url</label>
              <input class="ui input"
              id={`${this.fileId}-url`} 
              value={this.url} 
              onInput={this.formChangeHandler.bind(this)} />
            </div>
            <div class="field">
              <label class="ui horizontal label">Method</label>
              <select id={`${this.fileId}-method`}  class="ui selection dropdown" onChange={this.formChangeHandler.bind(this)}>
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
              </select>
            </div>
            <div class="field">
              <label class="ui horizontal label">Headers</label>
              <textarea id={`${this.fileId}-headers`}  
              onInput={this.formChangeHandler.bind(this)}>
                {JSON.stringify(this.headers, undefined, 2)}
              </textarea>
            </div>
            <div class="field">
              <component-icon></component-icon>
            </div>
          </form>
          <hr /> 
        </slot>
      </Host>
    );
  }
}
