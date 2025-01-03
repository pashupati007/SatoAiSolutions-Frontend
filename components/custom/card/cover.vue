<template>
  <div>
    <v-card
      flat
      :class="class"
      class="cover-card"
      :color="color"
      :height="height"
      :width="width"
    >
      <slot name="content"></slot>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "surface",
    },
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    class: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.cover-card {
  flex-shrink: 0;
  border-radius: 8px !important;
  background: surface;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
