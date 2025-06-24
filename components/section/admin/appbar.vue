<template>
  <div>
    <v-app-bar flat class="px-5" height="60">
      <v-img
        src="~/assets/images/logo.png"
        class="cursor-pointer"
        width="168px"
        height="48px"
        @click="$router.push('/admin')"
      ></v-img>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-avatar size="40px" style="border: 1px solid #fff">
            <v-icon v-bind="props"> mdi-account </v-icon>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title @click="$router.push('/')">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoUrl: "~/assets/images/logo.png",
      items: [{ title: "Logout" }],
    };
  },
};
</script>
