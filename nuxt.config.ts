import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3001/api/admin",
    },
  },

  pages: true,
  compatibilityDate: "2024-04-03",

  devtools: { enabled: true },
  css: [
    "@mdi/font/css/materialdesignicons.css",
    "~/assets/styles/main.css",
    "~/assets/styles/typography.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "vue3-carousel-nuxt",
  ],

  carousel: {
    prefix: "MyPrefix",
  },

  imports: {
    dirs: ["./stores"],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
