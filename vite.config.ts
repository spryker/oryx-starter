import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { viteConfig } from './vite.config.common.js';
import 'dotenv/config'

export default defineConfig({
  root: viteConfig.index,
  envDir: viteConfig.root,
  envPrefix: viteConfig.envPrefix,
  build: {
    outDir: viteConfig.build.outDirRoot,
    emptyOutDir: true,
  },
  define: {
    'import.meta.env.SCOS_BASE_URL':`"${process.env.SCOS_BASE_URL ?? process.env.ORYX_FALLBACK_SCOS_BASE_URL}"`
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
})
