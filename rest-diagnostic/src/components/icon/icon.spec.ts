import { Icon } from './icon';
import { newSpecPage } from "@stencil/core/dist/testing";

describe('component-icon', () => {
  it('builds', () => {
    expect(new Icon()).toBeTruthy();
  });
  it('Shows Icon with status', async () => {
    const page = await newSpecPage({
      html: `<component-icon responseStatus={200}></component-icon>`,
      components: [Icon]
    });
    expect(page.root).toEqualHtml(`
    <component-icon responseStatus={200}>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
    </component-icon>
`);
  });
});
