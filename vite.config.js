import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Game-demo/', // 👈 replace with your actual repo name
  envDir: '../',
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
  build: {
    rollupOptions: {
      external: [
        '/index.js',
        '/index.wasm',
        '/index.pck',
        '/index.wasm.framework.unityweb',
      ],
    },
  },
});
