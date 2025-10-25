import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 must match your repo name exactly (case-sensitive!)
  base: '/Game-demo/',

  envDir: '../',

  build: {
    outDir: 'docs', // 👈 ensure build output goes to your docs folder
    rollupOptions: {
      // no need for leading slashes here, Vite handles them
      external: [
        'index.js',
        'index.wasm',
        'index.pck',
        'index.wasm.framework.unityweb',
      ],
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    hmr: {
      clientPort: 443,
    },
  },
});
