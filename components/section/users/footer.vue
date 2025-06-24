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
              :src="mapUrl"
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
          © mukehsah Pvt. Ltd. All rights reserved
        </p>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1227.2811803036063!2d0.07799823111898424!3d51.52369076412407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a61a6b18d747%3A0xa2f2f4bfd53cbba2!2sJenkins%20Lane%20Depot%2C%20London%2C%20Barking%20IG11%200AD%2C%20UK!5e1!3m2!1sen!2snp!4v1746769834451!5m2!1sen!2snp",
      bgImage: "/images/bg-image.webp",
      items: [
        {
          text: "Jenkins Lane Depot, London, Barking IG11 0AD, UK",
          icon: "mdi-map-marker",
        },
        { text: "+441915153000", icon: "mdi-phone" },
        { text: "mukeshsah@gmail.com", icon: "mdi-email" },
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
