<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col></v-col>
        <v-col
          cols="6"
          align="start"
          justify="center"
          style="padding-top: 150px"
        >
          <p class="text-lg-h4 text-md-h4 text-h5 text-white-3">
            We are here for making your Dream true In this AI World.
          </p>
          <div class="text-left px-5 mt-10">
            <p
              v-for="(item, i) in items"
              :key="i"
              class="my-3 my-lg-4 my-md-4 d-flex align-center"
            >
              <v-icon :icon="item.icon" class="mr-2" size="35"></v-icon>
              <span class="text-subtitle-1 text-secondary-orange">{{
                item.text
              }}</span>
            </p>
          </div>
        </v-col>
        <v-col cols="4" align="center">
          <v-card
            class="glassmorphism login-card text-center"
            elevation="8"
            width="400"
          >
            <p class="text-h6">{{ cardTitle }}</p>
            <v-card-text class="text-left">
              <div>
                <v-form ref="loginForm">
                  <v-text-field
                    v-model="name"
                    variant="outlined"
                    density="compact"
                    placeholder="Name"
                    :rules="[rules.required]"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="email"
                    variant="outlined"
                    density="compact"
                    placeholder="Email or username"
                    :rules="[rules.required, rules.validEmail]"
                  >
                  </v-text-field>

                  <v-text-field
                    v-model="phone"
                    variant="outlined"
                    density="compact"
                    placeholder="Phone Number"
                    :rules="[rules.required]"
                  >
                  </v-text-field>

                  <v-text-field
                    v-model="company"
                    variant="outlined"
                    density="compact"
                    placeholder="Company Name"
                    :rules="[rules.required]"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="job"
                    variant="outlined"
                    density="compact"
                    placeholder="Job Titles"
                    :rules="[rules.required]"
                  >
                  </v-text-field>
                  <v-textarea
                    v-model="details"
                    variant="outlined"
                    density="compact"
                    placeholder="Job Details"
                    :rules="[rules.required]"
                    :rows="4"
                  >
                  </v-textarea>
                </v-form>
              </div>
            </v-card-text>
            <div>
              <CustomButtonThemBtn
                :title="btnText"
                :loading="submitLoading"
                @click="loginFun"
              />
            </div>
          </v-card>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { utilityStore } from "~/stores/utility";
export default {
  data() {
    return {
      submitLoading: false,
      name: "",
      email: "",
      phone: "",
      company: "",
      job: "",
      details: "",
      cardTitle: "Contact Us",
      btnText: "Proceed",
      rules: {
        required: (value) => !!value || "Required.",
        validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      },
      items: [
        {
          text: "Jenkins Lane Depot, London, Barking IG11 0AD, UK",
          icon: "mdi-map-marker",
        },
        { text: "+441915153000", icon: "mdi-phone" },
        { text: "mukeshsah@gmail.com", icon: "mdi-email" },
      ],
    };
  },

  mounted() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      try {
        this.$axios.get("/contact").then((response) => {
          console.log("Response data:", response.data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async loginFun() {
      const validation = await this.$refs.loginForm.validate();
      if (validation.valid) {
        this.submitLoading = true;
        try {
          this.$axios
            .post("/contact", {
              name: this.name,
              email: this.email,
              phone: this.phone,
              company: this.company,
              job_title: this.job,
              job_details: this.details,
            })
            .then((response) => {
              console.log("Response data:", response.data);
              this.name = "";
              this.email = "";
              this.phone = "";
              this.company = "";
              this.job = "";
              this.details = "";
              this.submitLoading = false;
              this.$refs.loginForm.resetValidation();
            });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
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
