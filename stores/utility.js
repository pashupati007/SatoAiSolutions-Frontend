export const utilityStore = defineStore("utility", {
  state: () => ({
    validRules: {
      required: (value) => !!value || "Required.",
      agree: (value) => !!value || "You must agree to terms and conditions.",
      validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      lengthMin8: (v) => (v && v.length >= 8) || "Min 8 characters",
      uppercase1: (v) =>
        /(?=.*[A-Z])/.test(v) || "Must have one capital letter",
      number1: (v) => /(?=.*\d)/.test(v) || "Must have one number",
    },
  }),
  actions: {
    height(payload) {
      if (import.meta.client) {
        const height = window.innerHeight - payload;
        return height;
      }
    },
  },
});
