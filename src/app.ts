import { appBuilder } from "@spryker-oryx/application";
import { storefrontFeatures } from "@spryker-oryx/presets/storefront";
import { storefrontTheme } from "@spryker-oryx/themes";
import { provideExperienceData } from "@spryker-oryx/experience";
import { FeatureOptions } from "@spryker-oryx/core";

import * as examples from "./examples/index.js";

export const app = appBuilder()
  .withEnvironment(import.meta.env)
  .withFeature(storefrontFeatures)
  .withTheme(storefrontTheme)
  // .withFeature(examples.labs)
  // .withTheme(examples.CustomTheme)
  // .withTheme(examples.CustomIcons)
  // .withOptions(examples.CustomComponentOptions)
  // .withComponents([examples.extendedComponentStyle])
  // .withComponents([
  //   examples.extendedComponentStyle,
  //   examples.extendedComponentLogic,
  //   examples.replacedComponentLogic,
  //   examples.customComponent,
  // ])
  // .withProviders([provideExperienceData([examples.HeaderTemplate])])
  .create();
