import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import reactRouterPlugin from 'vite-plugin-next-react-router';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRouterPlugin()],
  build: {
    emptyOutDir: true,
    outDir: '../dist/ui',
  },
});
