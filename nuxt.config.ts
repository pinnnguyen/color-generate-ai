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
})
