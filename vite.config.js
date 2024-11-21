import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.js', 'resources/css/app.css'], // Sesuaikan path jika berbeda
      refresh: true, // Mengaktifkan hot-reload untuk Laravel
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  },
})