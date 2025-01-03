<template>
  <div class="mx-10 mt-10">
    <v-container fluid>
      <v-row>
        <v-col><h1>Products</h1></v-col>
      </v-row>
      <v-row>
        <v-col v-for="card in projects" :key="card.title" cols="4">
          <v-card max-height="550px">
            <v-img
              :src="card.image"
              class="align-end ma-5 rounded-circle"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
              cover
            >
            </v-img>

            <v-card-text>
              <p class="text-caption">{{ new Date().toDateString() }}</p>
              <h3>{{ card.title }}</h3>
              <p class="mt-2">
                <span v-if="card.job_details.length > 270">
                  {{ card.job_details.slice(0, 270) }}
                  ...
                  <v-btn
                    variant="text"
                    size="x-small"
                    color="primary"
                    class="text-capitalize"
                    :href="card.company"
                    target="_blank"
                  >
                    Visit Website
                  </v-btn>
                </span>
                <span v-else>{{ card.job_details }}</span>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    projects: [],
  }),

  mounted() {
    this.getShowCase();
  },
  methods: {
    getShowCase() {
      try {
        this.$axios.get("/showCase").then((response) => {
          console.log("getShowCase data:", response.data);
          this.loading = false;
          this.projects = response.data;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
