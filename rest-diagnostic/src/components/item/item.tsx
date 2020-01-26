import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "diagnose-item",
  styleUrl: "item.css",
  shadow: true
})
export class Item {
  render() {
    return (
      <Host>
        <slot>
          <form class="ui form">
            <div class="field">
              <label class="ui horizontal label">Url</label>
              <input class="ui input" />
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
              <textarea></textarea>
            </div>
            <div class="field">
              <component-icon></component-icon>
            </div>
          </form>
        </slot>
      </Host>
    );
  }
}
