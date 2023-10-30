import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react'
    })
  ],
  server: {
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          projectstorm: ['@emotion/react']
        }
      }
    }
  }
})
