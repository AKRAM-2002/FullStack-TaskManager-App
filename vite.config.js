import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        // Disable ESLint for the following line
        /* eslint-disable */
        require('tailwindcss'),
        require('autoprefixer'),
        /* eslint-enable */
      ],
    },
  },
})
