import { appBuilder } from '@spryker-oryx/application';
import { storefrontFeatures } from '@spryker-oryx/presets/storefront';
import { storefrontTheme } from '@spryker-oryx/themes';
import { provideExperienceData } from '@spryker-oryx/experience';
import { FeatureOptions, componentDef } from '@spryker-oryx/core';
import {
  buttonComponent,
  iconButtonComponent,
  spinnerComponent,
} from '@spryker-oryx/ui';

import * as examples from './examples/index.js';

export const app = appBuilder()
  .withFeature(storefrontFeatures)
  .withTheme(storefrontTheme)
  .withTheme(examples.CustomTheme)
  .withTheme(examples.CustomIcons)
  .withFeature(examples.labs)
  .withOptions(examples.CustomSearchBoxOptions)
  .withComponents([
    buttonComponent({
      stylesheets: [
        ...(buttonComponent().stylesheets ?? []),
        {
          rules: examples.customButtonStyles,
        },
      ],
    }),
    iconButtonComponent({
      impl: () =>
        import('./examples/components/extended-icon-button.component.js').then(
          (m) => m.ExtendedIconButton,
        ),
    }),
    spinnerComponent({
      impl: () =>
        import('./examples/components/replace-spinner.component.js').then(
          (m) => m.ReplaceSpinnerComponent,
        ),
    }),
    componentDef({
      name: 'oryx-new-mock-button',
      impl: () =>
        import('./examples/components/new-mock.component.js').then(
          (m) => m.NewMockComponent,
        ),
    }),
  ])
  .withProviders([provideExperienceData([examples.HeaderTemplate])])
  .withEnvironment(import.meta.env)
  .create();
