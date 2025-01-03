<template>
  <div>
    <label v-if="label !== ''" :for="label"
      >{{ label }}
      <span
        style="
          width: 75px;

          color: #fff;
          font-family: Karla;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          opacity: 0.6;
        "
        >{{ subLabel }}</span
      ></label
    >
    <v-textarea
      @input="handleInput"
      v-model="modelValue"
      :id="label"
      variant="outlined"
      :bg-color="color"
      density="compact"
      :rules="rules"
      :placeholder="placeholder"
      :counter="counter"
      :type="type"
      :error-messages="error_messages"
      :prepend-inner-icon="prepend_inner_icon"
      :append-inner-icon="append_inner_icon"
      @click:append-inner="$emit('click:append-inner')"
      :autocomplete="autocomplete"
      class="mt-1"
      :row-height="row_height"
      :rows="rows"
      auto-grow
      shaped
    ></v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: [String, Number],
      default: "",
    },
    row_height: {
      type: Number,
      default: null,
    },
    rows: {
      type: Number,
      default: null,
    },
    rules: {
      type: Array,
      default: [],
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    subLabel: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: null,
    },
    counter: {
      type: Number,
      default: null,
    },
    error_messages: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    prepend_inner_icon: {
      type: String,
      default: null,
    },
    append_inner_icon: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      modelValue: "",
    };
  },
  watch: {
    values(val) {
      this.modelValue = this.values;
    },
  },
  mounted() {
    console.log(this.values);
    this.modelValue = this.values;
  },
  methods: {
    handleInput(e) {
      this.$emit("inputval", this.modelValue);
    },
  },
};
</script>
