import { LitElement, TemplateResult, html, css } from 'lit';

export class NewMockComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      background: red;
      color: green;
    }
  `;

  protected override render(): TemplateResult {
    return html`NewMockComponent`;
  }
}
