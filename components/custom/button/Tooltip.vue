<template>
  <!-- <div> -->
    <v-tooltip :text="text" :location="location">
      <template v-slot:activator="{ props }">
        <v-icon v-bind="props" :class="class" @click="$emit('click')">
          {{ icon }}
        </v-icon>
      </template>
    </v-tooltip>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "top",
    },
    icon: {
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
