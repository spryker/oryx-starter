import { appBuilder } from "@spryker-oryx/application";
import { labsFeatures } from "@spryker-oryx/labs";
import { storefrontFeatures } from "@spryker-oryx/presets/storefront";
import { storefrontTheme } from "@spryker-oryx/themes";

export const app = appBuilder()
    .withFeature([...storefrontFeatures, ...labsFeatures])
    .withTheme([storefrontTheme])
    .withEnvironment(import.meta.env)
    .create();