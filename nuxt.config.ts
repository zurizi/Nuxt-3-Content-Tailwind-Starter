export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  ssr: false, 
  app: {
    head: {
      title: "Nuxt 3 Content tailwind Starter",
    },
  },
});
