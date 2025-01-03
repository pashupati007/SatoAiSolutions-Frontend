<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item subtitle="sato@gmail.com" title="Ai Solutions"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="item in menu" :key="item.title" :to="item.link">
        <v-list-item-title
          class="text-subtitle-2"
          v-text="item.title"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "drawer-component",
  data() {
    return {
      logoUrl: "~/assets/images/logo.svg",
      drawer: true,
      menu: [
        { title: "Blogs", link: "/admin/blogs" },
        { title: "Show Case", link: "/admin/showCase" },
        {
          title: "Testomonials",
          link: "/admin/testomonials",
        },
        { title: "About Us", link: "/admin/about" },
        { title: "Contact Us", link: "/admin/contact" },
        { title: "News Letters", link: "/admin/newsLetters" },
      ],
    };
  },
};
</script>

<style>
.v-responsive {
  display: flex;
  flex: 0 0 auto;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
