// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
    modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
  }, 
})


