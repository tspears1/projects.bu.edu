import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [deno(), react()],
   build: {
      manifest: false,
      outDir: '_build',
      assetsDir: '.',
      rollupOptions: {
         input: ['main.jsx'],
         output: {
            // remove hash from names.
            entryFileNames: `[name].js`,
            chunkFileNames: `[name].js`,
            assetFileNames: `[name].[ext]`,
         },
      },
   }
})