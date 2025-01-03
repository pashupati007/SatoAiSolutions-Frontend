<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card max-height="550px">
            <!-- <v-img
              :src="card.image"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="350px"
              cover
            >
            </v-img>

            <v-card-text>
              <p class="text-caption">{{ new Date().toDateString() }}</p>
              <h3>{{ card.title }}</h3>
              <p class="mt-2">
                <span v-if="card.descriptions.length > 270">
                  {{ card.descriptions.slice(0, 270) }}
                  ...
                  <v-btn
                    variant="text"
                    size="x-small"
                    color="primary"
                    class="text-capitalize"
                  >
                    Read More
                  </v-btn>
                </span>
                <span v-else>{{ card.descriptions }}</span>
              </p>
            </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    blogs: [],
  }),
  mounted() {
    this.getBlogs();
  },
  methods: {
    getBlogs() {
      try {
        this.$axios.get("/blog").then((response) => {
          console.log("getBlogs data:", response.data);
          this.loading = false;
          this.blogs = response.data;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
