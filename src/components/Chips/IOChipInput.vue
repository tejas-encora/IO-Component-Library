<template>
  <md-input-chip :variant="variantBool" :close="closeBool"></md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInput',
  props: {
    variant: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantBool() {
      return `${this.variant}`
    },
    closeBool() {
      return `${this.close}`
    },
  }
};
</script>
