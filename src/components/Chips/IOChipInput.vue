<template>
  <md-input-chip :variant="variantBool" :close="closeBool" :elevated="setElevation"></md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInput',
  props: {
    variant: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: false,
    },
    elevation: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    variantBool() {
      return `${this.variant}`
    },
    closeBool() {
      return `${this.close}`
    },
        setElevation() {
      return `${this.elevation}`
    },
  }
};
</script>
