import { computed } from '@spryker-oryx/utilities'
import { CSSResultGroup, html, css, LitElement } from 'lit'
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface InstantChatMessages {
  aNumber: number
}

export class InstantChatMessages extends LitElement implements InstantChatMessages {

  static styles?: CSSResultGroup = css`
    :host {
      border: 2px dotted var(--oryx-color-primary-9);
      position: fixed!important;
      bottom: 5%;
      right: 0;
      background-color: var(--oryx-color-primary-8);
      padding: 1rem;
      z-index: 10
    }
    .chat-component {
      position: relative;
    }
    .icon {
      position: relative;
    }
    .messages-count {
      position: absolute;
      right: 0;
      bottom: 0;
      line-height: 1
    }
    .hidden {
      display: none
    }
  `
  @property({ type: Number })
  aNumber = 5

  @property({ type: Boolean })
  isChatOpen = true

  // public $chatInstance = computed(() => null)
  public $numberOfMessages = computed(() => this.aNumber)

  private _increment(e: Event) {
    this.aNumber ++
    this._triggerOpen(e)
  }

  private _triggerOpen(e: Event) {
    console.log('Open chat', e)
    this.isChatOpen = !this.isChatOpen

  }

  protected render() {
    const content = html`
      <section class="chat-component">
        <section class="open-chat ${classMap({hidden: !this.isChatOpen})}">
          <chat-component></chat-component>
        </section>
        <section class="icon">
          <oryx-button @click=${this._increment} type="icon" icon="chat"></oryx-button>
          <section class="messages-count">${this.aNumber}</section>
        </section>
      </section>
    `

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
