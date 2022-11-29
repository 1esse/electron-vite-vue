import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  publicDir: 'public',
  plugins: [vue()],
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
