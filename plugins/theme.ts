export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      theme: () => {
        const { useTheme } = require("vuetify"); // Dynamically import Vuetify's composable
        return useTheme(); // Call useTheme within a valid reactive context
      },
    },
  };
});
