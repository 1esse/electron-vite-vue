import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  publicDir: 'public',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: '../dist/renderer',
    assetsDir: '',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'cjs'
      },
      external: ['electron']
    }
  },
  optimizeDeps: {
    exclude: ['electron']
  }
})
