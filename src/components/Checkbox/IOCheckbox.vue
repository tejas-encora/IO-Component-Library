<template>
  <md-checkbox
    touch-target="wrapper"
    :error="isError"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></md-checkbox>
</template>

<script>
export default {
  name: 'IOCheckbox',
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modelValue: this.value,
    };
  },
  computed: {
    isError() {
      return this.error;
    },
  },
  watch: {
    value(newValue) {
      this.modelValue = newValue;
    },
  },
  methods: {
    updateModelValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>
md-checkbox[error] {
  --md-sys-color-primary: var(--md-ref-palette-error40);
}
</style>
