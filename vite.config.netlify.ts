import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: './src',
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
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../server/hosting/netlify.toml',
          dest: '../../client',
        },
      ],
    }),
  ],
});
