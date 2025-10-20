import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Build optimizations
  build: {
    // Generate sourcemaps for better debugging in production
    sourcemap: false,

    // Rollup options for code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code for better caching
          vendor: ['react', 'react-dom'],
        },
      },
    },

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Minification
    minify: 'esbuild',

    // Target modern browsers
    target: 'esnext',
  },

  // Server configuration for development
  server: {
    port: 5173,
    strictPort: false,
    host: true,
  },

  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
  },
})
