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

  protected render() {
    const content = html`
      Chat component content
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
