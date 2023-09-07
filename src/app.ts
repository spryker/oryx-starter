import { appBuilder } from '@spryker-oryx/application';
import { storefrontFeatures } from '@spryker-oryx/presets/storefront';
import { storefrontTheme } from '@spryker-oryx/themes';
import {colorPalette} from '@spryker-oryx/experience'
import { labsFeatures } from '@spryker-oryx/labs';

export const app = appBuilder()
    .withFeature(storefrontFeatures)
    .withFeature(labsFeatures)
    .withTheme(storefrontTheme)
    .withTheme({
        designTokens: [{
            color: {
                primary: colorPalette.colors.lime
            }
        }]
    })
    .withEnvironment(import.meta.env)
    .create();
