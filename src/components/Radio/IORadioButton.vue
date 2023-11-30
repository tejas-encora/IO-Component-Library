<template>
  <md-radio touch-target="wrapper" :error="isError" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
     ></md-radio>
</template>

<script>
export default {
  name: 'IORadioButton',
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },  
  computed: {
    isError() {
      return this.error;
    },
  },
  emits: ['update:modelValue'],
};
</script>
<style scoped>
md-checkbox[error] {
    --md-sys-color-primary: var(--md-ref-palette-error40);
}

</style>