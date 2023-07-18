import { defineConfig } from 'vite';
import { viteConfig } from './vite.config.common.js';

export default defineConfig({
  root: viteConfig.index,
  envDir: viteConfig.root,
  envPrefix: viteConfig.envPrefix,
  build: {
    target: 'esnext',
    lib: {
      entry: '../server/render.ts',
      formats: ['iife'],
      name: viteConfig.ssr.namespace,
    },
    emptyOutDir: true,
    outDir: '../dist/server',
    ssr: '../server/render.ts',
    rollupOptions: {
      external: ['buffer'],
    },
  },
  ssr: {
    noExternal: true,
  }
});
