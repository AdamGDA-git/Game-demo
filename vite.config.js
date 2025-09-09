import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({


  publicDir: path.resolve(__dirname, 'Public'),
  
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
        '/index.pck',   // change name if your .pck is different
        '/index.wasm.framework.unityweb', // if Godot/Unity exports more, add here
      ],
    },
  },
});
