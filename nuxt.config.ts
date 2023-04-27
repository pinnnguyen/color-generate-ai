export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  runtimeConfig: {
    MONGO_URL: process.env.MONGO_URL,
    OPEN_API_KEY: process.env.OPENAI_API_KEY,
  },
  css: ['~/styles/global.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@kevinmarrec/nuxt-pwa',
  ],
  app: {
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      bodyAttrs: {
        class: 'overflow-x-hidden',
      },
      title: 'AI Colors',
      meta: [
        {
          name: 'copyright',
          content: 'AI Colors',
        },
      ],
    },
  },
  pwa: {
    manifest: {
      name: 'AI Colors',
      short_name: 'AI Colors',
      start_url: '/',
      lang: 'en',
    },
    meta: {
      title: 'AI Colors',
      favicon: true,
      theme_color: '#FFFFFF',
      mobileApp: true,
      mobileAppIOS: true,
      author: 'Dyrt',
      ogSiteName: 'Dyrt',
      description: 'Generate palettes from a text prompt.',
    },
  },
})
