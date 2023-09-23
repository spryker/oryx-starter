import dotenv from "dotenv";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

dotenv.config();

export default defineConfig({
  root: "./src",
  envDir: "../",
  envPrefix: ["SCOS", "ORYX"],
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
  },
  define: {
    "import.meta.env.SCOS_BASE_URL": `"${
      process.env.SCOS_BASE_URL ?? process.env.ORYX_FALLBACK_SCOS_BASE_URL
    }"`,
    __ORYX_FEATURE_VERSION__: `"${process.env.ORYX_FEATURE_VERSION ?? ""}"`,
  },
  server: {
    port: 3000,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "../src/assets/addresses",
          dest: "../../dist/client/assets",
        },
      ],
    }),
  ],
});
