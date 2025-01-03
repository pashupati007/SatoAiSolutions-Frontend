<template>
  <div>
    <SectionUsersHome id="home" />
    <SectionUsersBlogs id="blogs" />
    <SectionUsersProjects id="projects" />
    <SectionUsersAbout id="about" />
    <SectionUsersTestomonials id="testomonials" />
    <!-- <BotpressWebchat /> -->
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "user",
    });
  },
};
</script>
