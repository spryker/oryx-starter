import { Theme, colorPalette } from "@spryker-oryx/experience";

// primary, secondary, neutral, info, success, error, warning
export const CustomTheme: Theme = {
  designTokens: [
    {
      color: {
        primary: colorPalette.colors.sky,
        secondary: {
          light: { 9: "blue" },
          dark: { 9: "red" },
        },
      },
    },
  ],
};
