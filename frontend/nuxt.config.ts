import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Un Parco in Biblioteca',
      htmlAttrs: {
        lang: 'it',
      },
    },
  },
  runtimeConfig: {
    public: {
      environment: process.env.ENVIRONMENT || 'development',
      sanity: {
        id: process.env.SANITY_ID || '',
        version: process.env.SANITY_VERSION || '',
      },
    },
  },

  nitro: {
    preset: 'static',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image', '@nuxt/fonts', '@nuxt/icon', 'nuxtjs-naive-ui'],
  fonts: {
    openDyslexic: {
      weights: [400, 600],
      styles: ['normal', 'italic'],
      subsets: ['cyrillic-ext', 'cyrillic', 'greek-ext', 'greek', 'vietnamese', 'latin-ext', 'latin'],
    },
  },
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
})
