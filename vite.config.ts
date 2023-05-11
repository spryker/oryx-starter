import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['SCOS', 'STORE', 'ORYX'],
  build: {
    outDir: '../dist/client',
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
