<template>
  <div>
    <v-app-bar class="pa-5" color="primary" tile flat app>
      <v-app-bar-title>
        <v-img
          src="~/assets/images/logo.png"
          class="cursor-pointer"
          width="168px"
          height="58px"
          @click="$router.push('/')"
        ></v-img>
      </v-app-bar-title>
      <div class="d-flex align-center" v-for="menu in menus" :key="menu.icon">
        <p class="text-body-1 cursor-pointer mr-6" @click="navigate(menu.link)">
          {{ menu.text }}
        </p>
      </div>
      <v-btn
        @click="loginDialog = true"
        color="primary"
        class="text-capitalize"
      >
        Login Admin
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="loginDialog" width="auto">
      <v-card class="glassmorphism login-card text-center" elevation="8">
        <p class="text-h6">{{ cardTitle }}</p>
        <v-card-text class="text-left">
          <div>
            <v-form ref="loginForm">
              <CustomFormTextField
                v-model="email"
                id="email"
                placeholder="Email or username"
                :rules="[rules.required, rules.validEmail]"
                prepend_inner_icon="mdi-email"
                @inputval="(e) => (email = e)"
              />
              <CustomFormTextField
                v-model="password"
                id="password"
                placeholder="Password"
                class="mt-2"
                autocomplete="new-password"
                prepend_inner_icon="mdi-lock"
                :append_inner_icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
                :rules="[
                  rules.required,
                  rules.lengthMin8,
                  rules.uppercase1,
                  rules.number1,
                ]"
                @inputval="(e) => (password = e)"
              />
            </v-form>
          </div>
        </v-card-text>
        <div>
          <CustomButtonThemBtn
            :title="btnText"
            :loading="false"
            @click="loginFun"
          />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginDialog: false,
      menus: [
        { text: "Home", link: "/" },
        { text: "Blogs", link: "blogs" },
        { text: "Projects", link: "projects" },
        { text: "About us", link: "about" },
        { text: "Testomonials", link: "testomonials" },
        { text: "Contact us", link: "contact" },
      ],
      email: "",
      password: "",
      showPassword: false,
      logStatus: "login",

      cardTitle: "Login To Admin",
      btnText: "Proceed",
      rules: {
        required: (value) => !!value || "Required.",
        validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        lengthMin8: (v) => (v && v.length >= 8) || "Min 8 characters",
        uppercase1: (v) =>
          /(?=.*[A-Z])/.test(v) || "Must have one capital letter",
        number1: (v) => /(?=.*\d)/.test(v) || "Must have one number",
      },
    };
  },
  methods: {
    async loginFun() {
      const validation = await this.$refs[this.logStatus + "Form"].validate();
      if (validation.valid) {
        console.log("status:");
        this.$router.push("/admin");
      }
    },
    navigate(route) {
      if (
        route == "home" ||
        route === "projects" ||
        route === "blogs" ||
        route == "about" ||
        route === "testomonials"
      ) {
        this.delayedFunction(route);
      } else {
        this.$router.push(route);
      }
    },
    delayedFunction(route) {
      const section = document.getElementById(route);
      section.style.scrollMarginTop = "90px";
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped>
.glassmorphism {
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #fff;
  background: rgba(84, 109, 132, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.login-card {
  min-width: 320px;
  padding: 30px 15px;
}

.forgot-password {
  color: #ffffff;
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
