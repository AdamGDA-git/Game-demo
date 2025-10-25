import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Game-demo/', // 👈 must match your repo name exactly

  build: {
    outDir: 'docs', // 👈 GitHub Pages serves from /docs
    rollupOptions: {
      external: [
        'index.js',
        'index.wasm',
        'index.pck',
        'index.wasm.framework.unityweb',
      ],
    },
  },
});
