export const themesStore = defineStore("themes", {
  state: () => ({
    light: {
      background: "#F5F7F8",
      surface: "#FFFFFF",
      primary: "#6200EE",
      secondary: "#E0E0E0",
      error: "#B00020",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
    dark: {
      background: "#112B43",
      surface: "#24405A",
      primary: "#38536E",
      secondary: "#546D84",
      text: "C4CED8",
      error: "#B00020",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  }),
});
