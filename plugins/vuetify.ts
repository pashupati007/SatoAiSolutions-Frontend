import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "dark",
      themes: {
        light: {
          dark: false,
          colors: {
            background: "#F5F7F8",
            surface: "#FFFFFF",
            primary: "#6200EE",
            secondary: "#E0E0E0",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
        dark: {
          dark: true,
          colors: {
            background: "#A8F1FF",
            surface: "#6FE6FC",
            primary: "#4ED7F1",
            secondary: "#168aad",
            text: "C4CED8",
            error: "#A93737",
            info: "#2196F3",
            success: "#0BD315",
            warning: "#FB8C00",
            grey: "#D9D9D9",
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
