import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md from '@baicie/vite-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
})
