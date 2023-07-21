export const viteConfig = {
  index: './src',
  root: '../',
  envPrefix: ['ORYX', 'FES', 'SCOS', 'STORE'],
  ssr: {
    entry: 'render.ts',
    namespace: 'storefront',
    root: './server',
  },
  build: {
    outDirRoot: '../dist/client',
    index: './client',
    ssr: './server',
  },
};
