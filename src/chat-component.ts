import { computed } from '@spryker-oryx/utilities'
import { CSSResultGroup, html, css, LitElement } from 'lit'
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface ChatComponent {
  aNumber: number
}

export class ChatComponent extends LitElement implements InstantChatMessages {

  static styles?: CSSResultGroup = css`
    :host {
      border: 0px;
      background-color: var(--oryx-color-primary-3);
      z-index: 9;
      position: fixed;
      bottom: 5%;
      width: 410px;
      height: 500px;
      overflow: hidden;
      opacity: 1;
      max-width: 100%;
      right: 70px;
      max-height: 100%;
      padding: 1rem
    }
    .input-field {
      position: absolute;
      bottom: 2.5%
    }
  `

  /**
   *
  {
    "data": {
      "type": "instant-chat",
      "attributes": {
        "message": "Who are you?"
      }
    }
  }

  {
    answer: "Yes"
  }
   *
   */

  // Why not??
  // <oryx-input type="text" placeholder="Behind the musgo"></oryx-input>
  protected render() {
    const content = html`
      <section>Message</section>
      <section class="input-field">
        <input type="text" placeholder="Gimme what you got" />
      </section>
    `

    return html`
      ${content}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "chat-component": ChatComponent;
  }
}
