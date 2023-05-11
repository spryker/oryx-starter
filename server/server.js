import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from '@spryker-oryx/application/server';

const config = {
  isProd: process.env.NODE_ENV === 'production',
  __dirname: dirname(fileURLToPath(import.meta.url)),
  prod: {
    root: '../dist',
    entry: `./server/render.js`,
    index: `./client`,
  },
  dev: {
    root: '../',
    entry: './server/render.ts',
    index: './src',
  },
  component: '<root-app></root-app>',
  namespace: 'storefront',
};

createServer(config).run();
