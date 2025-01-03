<template>
  <div></div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "admin",
    });
  },
  mounted() {
    this.$router.push("/admin/blogs");
  },
};
</script>
