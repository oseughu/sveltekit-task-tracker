import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: vercel(),
    vite: {
      resolve: {
        alias: {
          $src: resolve('src'),
          $stores: resolve('src/stores'),
          $components: resolve('src/components')
        }
      }
    }
  }
}

export default config
