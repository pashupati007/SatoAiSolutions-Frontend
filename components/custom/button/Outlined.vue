<template>
  <div>
    <v-btn
      :prepend-icon="prepend_icon"
      :append-icon="append_icon"
      :variant="variant"
      class="text-capitalize"
      :density="density"
      :rounded="rounded"
      :loading="loading"
      :size="size"
      :color="color"
      :icon="icon"
      @click="$emit('click')"
    >
      <span v-if="title">{{ title }}</span>
      <v-icon v-if="icon" :color="icon_color" :icon="iconText"></v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    prepend_icon: {
      type: String,
      default: "",
    },
    append_icon: {
      type: String,
      default: "",
    },
    class: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "outlined",
    },
    density: {
      type: String,
      default: "default",
    },
    rounded: {
      type: String,
      default: "lg",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
    color: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: false,
    },
    icon_color: {
      type: String,
      default: "",
    },
    iconText: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.v-btn {
  /* border-radius: 8px; */
}

/* .v-btn__content,
.v-btn__prepend,
.v-btn__append {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
} */
</style>
