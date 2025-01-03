<template>
  <div>
    <v-app class="">
      <div>
        <SectionAdminAppbar />
          <SectionAdminDrawer />
        <div style="margin-top: 100px; margin-left: 250px;">
          <slot />
        </div>
      </div>
    </v-app>
  </div>
</template>
<style>
.bg-app-image {
  /* background: url("~/assets/images/bg-image.webp") no-repeat center center;
  background-size: cover;
  min-height: 100vh; */
}
</style>
