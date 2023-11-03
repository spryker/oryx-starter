import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import dotenv from 'dotenv';

dotenv.config();

const skipSw = !!process.env.NO_SW;

export default defineConfig({
  root: '.',
  envPrefix: 'ORYX_',
  build: {
    outDir: 'dist/fulfillment',
    emptyOutDir: true,
    sourcemap: true,
  },
  define: {
    __ORYX_FEATURE_VERSION__: `"${process.env.ORYX_FEATURE_VERSION ?? ''}"`,
  },
  server: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    VitePWA({
      devOptions: { enabled: !skipSw, type: 'module' },
      registerType: 'prompt',
      injectRegister: 'auto',
      strategies: 'injectManifest',
      srcDir: 'dev-dist/sw',
      filename: 'app.js',
      manifest: {
        name: 'Fulfillment App',
        short_name: 'Fulfillment App',
        theme_color: '#ffffff',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            src: '/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            src: '/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        navigateFallback: 'index.html',
        clientsClaim: true,
        cleanupOutdatedCaches: true,
      },
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,otf}'],
      },
    }),
  ],
});
