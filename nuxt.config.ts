// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@invictus.codes/nuxt-vuetify", "nuxt-icon"],

  vuetify: {
    vuetifyOptions: {},
  },

  app: {
    head: {
      title: "My Portfolio",

      meta: [
        {
          name: "description",
          content: "My virtual portfolio created in NuxtJs",
        },
      ],
    },
    baseURL: "/nuxtdev/",
  },
});
