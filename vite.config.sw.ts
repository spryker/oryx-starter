import { defineConfig } from 'vite';

const production = !process.argv.includes('--watch');

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dev-dist/sw',
      lib: {
        entry: 'sw/app.ts',
        formats: ['es'],
        fileName: (format, entryName) => `${entryName}.js`,
      },
      rollupOptions: {
        external: ['fs', 'path', 'url', 'module', 'vm', /^node/, /^@netlify/],
      },
    },
    define: {
      __ORYX_FEATURE_VERSION__: `"${process.env.ORYX_FEATURE_VERSION ?? ''}"`,
      'process.env.NODE_ENV': JSON.stringify(
        production ? '"production"' : '"development"'
      ),
      'process.env.PROD': JSON.stringify(production),
      'process.env.DEV': JSON.stringify(!production),
      'process.env': JSON.stringify(process.env ?? {}),
    }
  };
});
