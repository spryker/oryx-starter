import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import dotenv from 'dotenv';

dotenv.config();

const skipSw = !!process.env.NO_SW;

export default defineConfig({
  root: '.',
  envPrefix: 'ORYX',
  build: {
    outDir: 'dist/fulfillment',
    emptyOutDir: true,
    sourcemap: true,
  },
  define: {
    'import.meta.env.ORYX_FULFILLMENT_BACKEND_URL': `"${
        process.env.ORYX_FULFILLMENT_BACKEND_URL ?? process.env.ORYX_FALLBACK_FULFILLMENT_BACKEND_URL
    }"`,
    'import.meta.env.ORYX_FULFILLMENT_PUBLIC_VAPID_KEY': `"${
        process.env.ORYX_FULFILLMENT_PUBLIC_VAPID_KEY ?? process.env.ORYX_FALLBACK_FULFILLMENT_PUBLIC_VAPID_KEY
    }"`,
    'import.meta.env.ORYX_FULFILLMENT_CLIENT_ID': `"${
        process.env.ORYX_FULFILLMENT_CLIENT_ID ?? process.env.ORYX_FALLBACK_FULFILLMENT_CLIENT_ID
    }"`,
    __ORYX_FEATURE_VERSION__: `"${process.env.ORYX_FEATURE_VERSION ?? ''}"`,
  },
  server: {
    port: 3000,
    host: 'localhost',
  },
  preview: {
    port: 3000,
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
