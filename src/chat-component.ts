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
    }

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
  answers = ['First message']

  lastAnswer = 'The New One'

  private _sendMessage(e) {
    fetch('http://glue.de.spryker.local/instant-chat', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/vnd.api+json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": "application/json"
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
      this.answers.concat = response.answer
    }).catch(error => console.log(error))
  }

  private _updateValue(e) {
    this.valueToSend = e.target.value
  }

  private _mockResponse() {
    const theNewOne = html`${this.answers}<div>${this.lastAnswer}</div>`
    this.answers = theNewOne
  }

  // Why not??
  // <oryx-input type="text" placeholder="Behind the musgo"></oryx-input>
  protected render() {
    const content = html`
      <section class="messages">${this.answers}</section>
      <section class="input-field">
        <form>
          <input type="text" @input=${this._updateValue} placeholder="Gimme what you got" />
        </form>
        <button class="submit-button" @click=${this._mockResponse}>Send</button>
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
