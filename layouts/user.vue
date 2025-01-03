<template>
  <div>
    <v-app class="bg-app-image">
      <div>
        <Appbar />
        <div style="margin-top: 100px">
          <slot />
        </div>
        <SectionUsersFooter />
      </div>
    </v-app>
  </div>
</template>
<script setup>
import { useHead } from "unhead";

useHead({
  script: [
    { src: "https://cdn.botpress.cloud/webchat/v2/inject.js", async: true },
    {
      src: "https://mediafiles.botpress.cloud/52345432-5432543-5435-435545434/webchat/v2/config.js",
      async: true,
    },
  ],
});
</script>
'
<style>
/* .bg-app-image {
  background: url("~/assets/images/bg-image.webp") no-repeat center center !important;
  background-size: cover;
  min-height: 100vh;
} */
</style>
