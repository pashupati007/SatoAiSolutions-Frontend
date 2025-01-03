<template>
  <div>
    <v-lazy
      :min-height="300"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <v-container fluid class="pa-4 pa-xl-15 pa-lg-12 pa-md-8 pa-sm-6">
        <v-row no-gutters>
          <h1>Testomonials</h1>
        </v-row>
        <v-row class="mt-15" justify="start">
          <carousel
            :items-to-show="itemsToShow"
            wrap-around
            class="customer-carousel"
          >
            <slide v-for="(testimonial, index) in testomonials" :key="index">
              <v-card class="pa-5 mx-3 yellow-card" height="380">
                <v-card-text style="min-height: 250px">
                  <v-row>
                    <v-col align="start">
                      <div>
                        <v-icon size="32px">mdi-format-quote-open</v-icon>
                        <p class="mt-2 text-subtitle-2">
                          {{ testimonial.details }}
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-row>
                    <v-col cols="3" align="end">
                      <div
                        class="pb-10"
                        style="
                          display: flex;
                          justify-items: center;
                          align-items: center;
                        "
                      >
                        <v-avatar size="60">
                          <v-img :src="testimonial.image"></v-img>
                        </v-avatar>
                      </div>
                    </v-col>
                    <v-col cols="auto" align="start">
                      <div class="font-weight-semibold-third text-subtitle-1">
                        <h3>{{ testimonial.name }}</h3>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </v-row>
      </v-container>
    </v-lazy>
  </div>
</template>

<script>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      testomonials: [],
      // testomonials: [
      //   {
      //     details: "Sato AI has completely transformed our business operations. Their AI solutions are cutting-edge and tailored to our specific needs. The implementation was seamless, and their team was incredibly supportive throughout the process. We’ve seen significant improvements in efficiency and decision-making. Highly recommend their services!",
      //     name: "Pashupati Chaudhary",
      //     avatar:
      //       "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/465874068_1984769422007783_8577038619099673757_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEyqWeu1TiVW-f0Z0HK0L1xDixKIP1COvcOLEog_UI697ExdiuAufv7oIo5aUwhc9-yuqt5FV17ef9uMsIMxp-B&_nc_ohc=DClpCWkNlm0Q7kNvgE64Ui0&_nc_oc=Adg1Qo5Y6gXTAt3hqorpocw-1oiT6U3TbzwGWtNjYm6WaTqT8QW8E4fdUOgVZHSlYYC5t1StqIsW-O7A6JaYZyiw&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=AGhO2F_sHAfZrL4rz8cDbk3&oh=00_AYCFH_8877EY0sjEshuQjVASiYE-P2XNc22_XzBStfNXMw&oe=677C60BA",
      //   },
      //   {
      //     details: "The AI solutions provided by Sato AI exceeded our expectations. From predictive analytics to automating routine tasks, their tools have been a game-changer for our company. The support team is knowledgeable and always ready to assist. A fantastic experience from start to finish!",
      //     name: "Rohan Chaudhary",
      //     avatar:
      //       "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/471246789_587208040622214_3278314311949467779_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHP92LAc-9nDjJsYIywLJBdfP_fVYQIvPR8_99VhAi89Eew09_wOV5eHGiR44BtSVRuWS4ED1wLREOZJGkltac6&_nc_ohc=GYx8CNmthuUQ7kNvgF9WChA&_nc_oc=Adi83P201YbK8YiyMk16qVbmoGuvmJprnbd-AnOEthfahXhxfDwph45yvU_Rh1js5MnwqbrztxgwMoQtoZ_53XiX&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=Ai6e5fmHUG_BIv1jNDvyp0_&oh=00_AYB5l0HsF9pJbw2P90SyzZnQ7VcJ8RgF3XYNAb4WkD8y6Q&oe=677C4EA7",
      //   },
      //   {
      //     details: "Sato is the go-to platform for all things AI. Their innovative solutions have helped us stay ahead in our industry. The team took the time to understand our challenges and delivered customized AI tools that delivered immediate results. Outstanding service and exceptional technology!",
      //     name: "Bibek Yadav",
      //     avatar:
      //       "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/433123619_980959250276228_512857668071418574_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHmJkY6wklSArFDV54jdvLF1SeH9gvkgO3VJ4f2C-SA7U8aKxMvUnTYtzlt4DWggi6anh09l05c1R-cJOUQ3yk2&_nc_ohc=duLSq5npvIwQ7kNvgHKKEEy&_nc_oc=AdjlU4T7jJ4Arr1HetPYKumHtMeHqWpyXA4-xSVKeXaQP6vwn9Iw0ZeMtvGZfgyVAnT71ye5P5szBGYsllgCgD7Q&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=A_YPH2YXRp2hEKrzvUW-Yjr&oh=00_AYCqd_ogMSB8w9SVU-YPDG6JKDWqfL6hyz0vTUiV3JkUJg&oe=677C560E",
      //   },
      // ],
      itemsToShow: 3,
    };
  },
  mounted() {
    this.getTestomonials();
  },
  methods: {
    getTestomonials() {
      try {
        this.$axios.get("/testomonial").then((response) => {
          console.log("getTestomonials data:", response.data);
          this.loading = false;
          this.testomonials = response.data;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.customer-carousel {
  max-width: 100%;
}
</style>
