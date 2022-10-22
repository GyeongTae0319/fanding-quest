export default defineNuxtConfig({
  css: ["~/assets/styles/root.scss"],
  modules: ["@vueuse/nuxt", "nuxt-icon"],
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/global.scss" as *;`,
        },
      },
    },
  },
});
