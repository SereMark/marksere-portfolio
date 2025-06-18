import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'icon-vendor': ['react-icons'],
        },
      },
    },
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons'],
  },
});