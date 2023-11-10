<template>
  <md-input-chip :variant="variantBool"><slot/></md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInputTrailing',
  props: {
    variant: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantBool() {
      return `${this.variant}`
    }
  }
};
</script>
