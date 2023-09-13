import { computed  } from '@spryker-oryx/utilities'
import { html, LitElement } from 'lit'

export class InstantChatMessages extends LitElement {
  public $chatInstance = computed(() => null)

  protected override render() {

    const htmlToRender = `heyyy you`
    return html`
      ${htmlToRender}
    `
  }
}