import { appBuilder } from '@spryker-oryx/application';
import { fulfillmentFeatures } from '@spryker-oryx/presets/fulfillment';
import { fulfillmentTheme } from '@spryker-oryx/themes';

const env = import.meta.env;

appBuilder()
    .withEnvironment(env)
    .withFeature(fulfillmentFeatures({
        picking: {
            appVersion: env.ORYX_APP_VERSION,
        },
    }))
    .withTheme(fulfillmentTheme)
    .create();
