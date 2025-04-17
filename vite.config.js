import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  server: {
    port: 8080,
    open: 'true'
  },
  build: {
    outDir: './../dist'
  }
});
