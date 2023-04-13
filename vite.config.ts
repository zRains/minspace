/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@comp': path.resolve(__dirname, 'src/components'),
      '@style': path.resolve(__dirname, 'src/styles'),
      '@layout': path.resolve(__dirname, 'src/layouts'),
      '@util': path.resolve(__dirname, 'src/utils'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@api': path.resolve(__dirname, 'src/apis'),
      '@cos': path.resolve(__dirname, 'src/composes'),
      '@': path.resolve(__dirname, 'src')
    }
  }
})
