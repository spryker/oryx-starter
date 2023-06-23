import {
  buttonComponent,
  iconButtonComponent,
  spinnerComponent,
} from '@spryker-oryx/ui';
import { customButtonStyles } from './styles.js';
import { componentDef } from '@spryker-oryx/core';

export const extendedComponentStyle = buttonComponent({
  stylesheets: [
    ...(buttonComponent().stylesheets ?? []),
    {
      rules: customButtonStyles,
    },
  ],
});

export const extendedComponentLogic = iconButtonComponent({
  impl: () =>
    import('./extended-icon-button.component.js').then(
      (m) => m.ExtendedIconButton,
    ),
});

export const replacedComponentLogic = spinnerComponent({
  impl: () =>
    import('./replaced-spinner.component.js').then(
      (m) => m.ReplacedSpinnerComponent,
    ),
});

export const customComponent = componentDef({
  name: 'oryx-new-mock',
  impl: () => import('./new-mock.component.js').then((m) => m.NewMockComponent),
});
