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
  ],
  app: {
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      bodyAttrs: {
        class: 'overflow-x-hidden',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ],
      title: 'AI Colors',
      meta: [
        {
          name: 'copyright',
          content: 'AI Colors',
        },
      ],
    },
  },
})
