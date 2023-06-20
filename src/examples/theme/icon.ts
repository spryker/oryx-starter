import { Theme } from "@spryker-oryx/experience";

import {
  materialDesignIcons,
  storefrontIcons,
  fontawesomeIcons,
} from "@spryker-oryx/resources";
/**
 * Demonstrates the customization of variable icon fonts, which can include weight, fill, color, size
 */
export const CustomIcons: Theme = {
  // custom icon styles
  designTokens: [
    {
      icon: {
        weight: "100",
      },
    },
  ],
  // custom icons
  icons: {
    resource: materialDesignIcons,
    resources: [
      {
        resource: storefrontIcons,
        types: Object.keys(storefrontIcons.mapping ?? {}),
      },
      {
        resource: {
          id: materialDesignIcons.id,
          styles: { fill: 1 },
        },
        types: ["person"],
      },
    ],
  },
};
