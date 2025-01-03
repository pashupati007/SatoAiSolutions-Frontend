<template>
  <v-card>
    <v-container fluid class="pa-0">
      <v-row class="pt-10" align="center" justify="space-around">
        <v-col cols="12" lg="4" md="4">
          <p class="text-lg-h4 text-md-h4 text-h5 text-white-3 text-center">
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

        <v-col cols="12" lg="4" md="4" class="text-left">
          <div class="mt-5 px-5 text-left text-h6 font-white-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.6745540497386!2d0.060414050442371456!3d51.509006275036676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a89cb7a8361b%3A0xc74ded44efde6823!2sNew%20Beckton%20Park!5e1!3m2!1sen!2snp!4v1735813609774!5m2!1sen!2snp"
              width="100%"
              height="350"
              style="border: 0; width: 100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-col>

        <v-col cols="12" lg="3" md="3" class="px-5">
          <label class="text-h5 text-white-3" for="subscribe_email"
            >Subscribe Newsletter</label
          >
          <v-form ref="subscribeForm">
            <v-text-field
              v-model="email"
              placeholder="Your email address"
              variant="outlined"
              density="compact"
              :rules="[rules.required, rules.validEmail]"
              @keydown.enter.prevent="subscribe"
            >
            </v-text-field>
          </v-form>
          <div class="text-lg-end text-md-end text-center">
            <v-btn
              variant="outlined"
              class="text-capitalize rounded-lg"
              @click="subscribe"
            >
              Subscribe
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row class="px-10 pb-10" justify="space-between" align="center">
        <p class="text-subtitle-1 text-white-3">
          © sato Pvt. Ltd. All rights reserved
        </p>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bgImage: "/images/bg-image.webp",
      items: [
        {
          text: "Savage Gardens, London E6 5NB, United Kingdom",
          icon: "mdi-map-marker",
        },
        { text: "+977-9804780505 +977-9804787084", icon: "mdi-phone" },
        { text: "sato@gmail.com", icon: "mdi-email" },
      ],
      rules: {
        required: (value) => !!value || "Required.",
        validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      },
      email: "",
    };
  },
  methods: {
    async subscribe() {
      console.log(this.email);
      const validation = await this.$refs.subscribeForm.validate();
      if (validation.valid) {
        this.$axios
          .post("/newsletters/subscribe", { email: this.email })
          .then((response) => {
            console.log(response);
            this.email = "";
            this.$refs.subscribeForm.resetValidation();
          });
      }
    },
    footerHeight() {
      if (this.$vuetify.display.lgAndUp) {
        return "500px";
      } else if (this.$vuetify.display.smAndDown) {
        return "950px";
      }
    },
  },
};
</script>

<style>
/* Custom styles */
.v-btn {
  text-transform: none;
  font-weight: bold;
}
</style>
