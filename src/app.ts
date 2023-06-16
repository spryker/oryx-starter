import { appBuilder } from "@spryker-oryx/application";
import { storefrontFeatures } from "@spryker-oryx/presets/storefront";
import { storefrontTheme } from "@spryker-oryx/themes";

import * as examples from "./examples";

export const app = appBuilder()
  .withFeature(storefrontFeatures)
  .withTheme(storefrontTheme)
  //   .withTheme(examples.CustomTheme)
  //   .withFeature(examples.labs)
  .withEnvironment(import.meta.env)
  .create();
