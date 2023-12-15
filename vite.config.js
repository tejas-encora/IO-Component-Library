import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'ioUI',
      fileName: (format) => `mat-lib-test.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@labs': fileURLToPath(new URL('./labs', import.meta.url)),
      '@public': fileURLToPath(new URL('./public', import.meta.url)),
      '@assests': fileURLToPath(new URL('./assets', import.meta.url)),
    }
  }
})