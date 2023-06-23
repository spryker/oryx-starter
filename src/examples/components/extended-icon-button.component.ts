import { IconButtonComponent } from '@spryker-oryx/ui/icon-button';
import { TemplateResult } from 'lit-html';

export class ExtendedIconButton extends IconButtonComponent {
  protected override render(): TemplateResult {
    console.log('ExtendedIconButton => render method');
    return super.render();
  }
}
