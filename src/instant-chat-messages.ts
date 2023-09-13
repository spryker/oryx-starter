import { computed } from '@spryker-oryx/utilities'
import { CSSResultGroup, html, css, LitElement } from 'lit'
import { property } from 'lit/decorators.js';

export interface InstantChatMessages {
  aNumber: number
}

export class InstantChatMessages extends LitElement implements InstantChatMessages {

  static styles?: CSSResultGroup = css`
    body {
      background-color: blue
    }
    :host {
      border: 2px dotted var(--oryx-color-primary-9);
      position: fixed!important;
      bottom: 5%;
      right: 0;
      background-color: var(--oryx-color-primary-8);
      padding: 1rem
    }
    .chat-component {
      position: relative;
    }
    .messages-count {
      position: absolute;
      right: 0;
      bottom: 0;
      line-height: 1
    }
  `
  @property({ type: Number })
  aNumber = 5

  // public $chatInstance = computed(() => null)
  public $numberOfMessages = computed(() => this.aNumber)

  private _increment(e: Event) {
    this.aNumber ++
  }

  private _openChat(e: Event) {
    window.console.log('Open chat')
  }

  protected render() {
    const content = html`
      <body>
        <section class="chat-component">
          <section class="icon">
            <oryx-button @click=${this._increment} type="icon" icon="chat"></oryx-button>
          </section>
          <section class="messages-count">${this.aNumber}</section>
        </section>
      </body>`

    return html`
      ${content}
    `
  }
}

/**
 * <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/chat.png" alt="chat-closed" />
 * <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/chat.png" alt="chat-open" />
 */

declare global {
  interface HTMLElementTagNameMap {
    "instant-chat-messages": InstantChatMessages;
  }
}
