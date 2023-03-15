import { defineConfig } from 'vite';
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['FES', 'SCOS', 'STORE'],
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../src/assets/addresses',
          dest: '../../dist/client/assets',
        },
      ],
    }),
  ],
});
