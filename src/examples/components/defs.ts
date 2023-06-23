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

export const replaceComponentLogic = spinnerComponent({
  impl: () =>
    import('./replace-spinner.component.js').then(
      (m) => m.ReplaceSpinnerComponent,
    ),
});

export const customComponent = componentDef({
  name: 'oryx-new-mock-button',
  impl: () => import('./new-mock.component.js').then((m) => m.NewMockComponent),
});
