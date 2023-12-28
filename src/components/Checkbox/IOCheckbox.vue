<template>
  <md-checkbox touch-target="wrapper" :class="{ 'error-state': error }" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
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
  computed: {
    isError() {
      return this.error;
    },
  },
  emits: ['update:modelValue'],
};
</script>
<style scoped>
.error-state {
    --md-sys-color-primary: var(--md-ref-palette-error40);
}

</style>