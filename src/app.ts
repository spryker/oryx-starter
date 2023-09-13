import { appBuilder } from '@spryker-oryx/application';
import { storefrontFeatures } from '@spryker-oryx/presets/storefront';
import { storefrontTheme } from '@spryker-oryx/themes';
import {colorPalette, provideExperienceData } from '@spryker-oryx/experience'
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
    .withComponents([{
        name: 'instant-chat-messages',
        impl: () =>
            import('./instant-chat-messages.js').then(
                m => m.InstantChatMessages
            )
    }])
    .withProviders([
        provideExperienceData({
            merge: {
                selector: 'legal-links',
                type: 'after',
            },
            type: 'instant-chat-messages'
        })
    ])
    .withEnvironment(import.meta.env)
    .create();
