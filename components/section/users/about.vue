<template>
  <div class="mx-10 mt-10">
    <v-container fluid style="min-height: 550px">
      <v-row>
        <v-col><h1>About us</h1></v-col>
      </v-row>
      <v-row>
        <v-col cols="7">
          <p>{{ abouts[0]?.descriptions }}</p>
        </v-col>
        <v-col cols="5">
          <v-img
            :src="abouts[0]?.image"
            class="cursor-pointer"
            width="100%"
            height="100%"
            style="opacity: 0.7"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abouts: [],
      loading: true,
    };
  },
  mounted() {
    this.getAboutUs();
  },
  methods: {
    getAboutUs() {
      try {
        this.$axios.get("/about").then((response) => {
          console.log("getAboutUs data:", response.data);
          this.loading = false;
          this.abouts = response.data;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
