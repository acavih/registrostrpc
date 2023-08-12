// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['trpc-nuxt', 'vuetify']
  },
  modules: [
    'nuxt-mongoose'
  ],
  mongoose: {
    options: {},
    modelsDir: 'models',
    uri: process.env.MONGODB_URI
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
