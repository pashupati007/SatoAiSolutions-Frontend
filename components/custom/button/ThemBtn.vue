<template>
  <div>
    <v-btn
      :color="color"
      :variant="variant"
      :size="size"
      class="text-capitalize px-4 py-2"
      @click="$emit('click')"
      density="default"
      :loading="loading"
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "white",
    },
    variant: {
      type: String,
      default: "outlined",
    },
    size: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
.v-btn {
  border-radius: 8px;
}

.v-btn__content,
.v-btn__prepend,
.v-btn__append {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
