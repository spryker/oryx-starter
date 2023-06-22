import { appBuilder } from "@spryker-oryx/application";
import { storefrontFeatures } from "@spryker-oryx/presets/storefront";
import { storefrontTheme } from "@spryker-oryx/themes";
import { FeatureOptions } from "@spryker-oryx/core";

import * as examples from "./examples/index.js";

export const app = appBuilder()
  .withFeature(storefrontFeatures)
  .withTheme(storefrontTheme)
  .withTheme(examples.CustomTheme)
  .withTheme(examples.CustomIcons)
  .withFeature(examples.labs)
  .withOptions(examples.CustomSearchBoxOptions)
  .withEnvironment(import.meta.env)
  .create();
