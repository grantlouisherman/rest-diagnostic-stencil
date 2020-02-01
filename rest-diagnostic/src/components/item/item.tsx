import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "diagnose-item",
  styleUrl: "item.css",
  shadow: true
})
export class Item {
  @Prop() url: string;
  @Prop() headers: any;
  @Prop() method: string;
  
  render() {
    return (
      <Host>
        <slot>
          <form class="ui form fetchItem">
            <div class="field">
              <label class="ui horizontal label">Url</label>
              <input class="ui input" value={this.url} />
            </div>
            <div class="field">
              <label class="ui horizontal label">Method</label>
              <select id="method" class="ui selection dropdown">
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
              </select>
            </div>
            <div class="field">
              <label class="ui horizontal label">Headers</label>
              <textarea>{JSON.stringify(this.headers, undefined, 2)}</textarea>
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
