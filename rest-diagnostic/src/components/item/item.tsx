import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  State
} from "@stencil/core";
import { iconResolver } from "../../utils/utils";

export interface FormEvent {
  id: string;
  value: string;
}

export interface Response {
  status: number;
  responseBody: any;
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
  @Prop() body: any;
  @Prop() method: string;
  @Prop() response: Response;
  @Prop() checkbox: string;
  @State() methodsForAPICall: Array<string> = ["GET", "POST", "PUT"];

  componentWillLoad() {
    const selectedMethod = this.method;
    const indexOfSelectedMethod = this.methodsForAPICall.indexOf(
      selectedMethod
    );
    this.methodsForAPICall.splice(indexOfSelectedMethod, 1);
    this.methodsForAPICall.splice(0, 0, selectedMethod);
    console.log(this.methodsForAPICall)
  }

  @Event({
    eventName: "formChanged",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  formChanged: EventEmitter<FormEvent>;

  formChangeHandler(event) {
    const id = event.target.id;
    const value = event.target.value;
    const data: FormEvent = { id, value };
    this.formChanged.emit(data);
  }

  render() {
    return (
      <Host>
        <slot>
          <form class="ui form">
            <div class="field">
              <label class="ui horizontal label">Url</label>
              <input
                class="ui input"
                id={`${this.fileId}-url`}
                value={this.url}
                onInput={this.formChangeHandler.bind(this)}
              />
            </div>
            <div class="field">
              <label class="ui horizontal label">Method</label>
              <select
                id={`${this.fileId}-method`}
                class="ui selection dropdown"
                onChange={this.formChangeHandler.bind(this)}
              >
                {this.methodsForAPICall.map(method => (
                  <option>{method}</option>
                ))}
              </select>
            </div>
            <div class="field">
              <label class="ui horizontal label">Headers</label>
              <textarea
                id={`${this.fileId}-headers`}
                onInput={this.formChangeHandler.bind(this)}
              >
                {JSON.stringify(this.headers, undefined, 2)}
              </textarea>
            </div>
            <div class="field">
              <label class="ui horizontal label">Body</label>
              <textarea
                id={`${this.fileId}-headers`}
                onInput={this.formChangeHandler.bind(this)}
              >
                {JSON.stringify(this.body, undefined, 2)}
              </textarea>
            </div>
            <div>
              <label class="ui horizontal label">Include response body:</label>
              <input
                class="ui checkbox"
                id={`${this.fileId}-checkbox`}
                type="checkbox"
                onChange={this.formChangeHandler.bind(this)}
                value={`${this.checkbox}`}
                checked={Boolean(this.checkbox)}
              />
            </div>
            {this.response ? (
              <div
                class={`field ui horizontal label ${iconResolver(
                  this.response.status
                )}`}
                style={{ margin: "50px" }}
              >
                <component-icon
                  responseStatus={this.response.status}
                ></component-icon>
              </div>
            ) : null}
          </form>
          <hr />
        </slot>
      </Host>
    );
  }
}
