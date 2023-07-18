import { defineConfig } from 'vite';
import { viteConfig } from './vite.config.common.js';

export default defineConfig({
  root: viteConfig.index,
  build: {
    minify: false,
    lib: {
      entry: '../server/hosting/netlify.ts',
      formats: ['es'],
      fileName: 'index',
    },
    emptyOutDir: true,
    outDir: '../dist/functions/ssr',
    rollupOptions: {
      external: ['fs', 'path', 'url', 'module', 'vm', /^node/, /^@netlify/],
    },
  }
});
