// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['trpc-nuxt']
  },
  modules: [
    'nuxt-mongoose'
  ],
  mongoose: {
    options: {},
    modelsDir: 'models',
    uri: process.env.MONGODB_URI
  }
})
