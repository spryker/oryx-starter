import { computed } from '@spryker-oryx/utilities'
import { CSSResultGroup, html, css, LitElement } from 'lit'
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export class ChatComponent extends LitElement {

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
    .messages {
      background-color: var(--oryx-color-primary-1);
      padding: 0.5rem
    }
    .input-field {
      position: absolute;
      bottom: 2.5%;
      width: 100%;

    }
    input {
      padding: 7px 11px;
      width: 95%
    }
    form {
      width: 75%;
      display: inline-block;
      margin-right: 5px;
    }
    .submit-button {
      padding: 7px 11px;
      width: 15%;
      border-color: var(--oryx-color-primary-6);
      background: var(--oryx-color-primary-2);
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

  @property({ type: String })
  valueToSend = ''

  @property( {type: String })
  answers = ['What is Spryker?']

  lastAnswer = ''

  private _sendMessage(e) {
    e.preventDefault()
    fetch('http://glue.de.spryker.local/instant-chat', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/vnd.api+json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": "application/json",
      },
      body: JSON.stringify({
        "data": {
          "type": "instant-chat",
          "attributes": {
            "message": this.valueToSend
          }
        }
      })
    }).then((response) => {
      console.log(response)
      const theNewOne = html`${this.answers}<div> - ${response.data.attributes.answer}</div>`
      this.answers = theNewOne
    }).catch(error => console.log(error))
  }

  private _updateValue(e) {
    this.valueToSend = e.target.value
  }

  private _mockResponse(e: Event) {
    e.preventDefault()
    const theNewOne = html`${this.answers}<div> - ${this.lastAnswer}</div>`
    this.answers = theNewOne
  }

  // Why not??
  // <oryx-input type="text" placeholder="Behind the musgo"></oryx-input>
  protected render() {
    const content = html`
      <section class="messages">${this.answers}</section>
      <section class="input-field">
        <form @submit=${this._sendMessage}>
          <input type="text" @input=${this._updateValue} placeholder="Gimme what you got" />
        </form>
        <button class="submit-button" @click=${this._sendMessage}>Send</button>
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
