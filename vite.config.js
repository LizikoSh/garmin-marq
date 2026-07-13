import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/analytics.js'),
      name: 'VercelAnalytics',
      fileName: 'analytics',
      formats: ['iife']
    },
    outDir: 'assets/js',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'analytics.js',
      }
    }
  }
});
