<template>
  <md-input-chip :variant="variantBool" :notrail="trailingBool"></md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInput',
  props: {
    variant: {
      type: Boolean,
      default: false
    },
    notrail: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantBool() {
      return `${this.variant}`
    },
    trailingBool() {
      return `${this.notrail}`
    },
  }
};
</script>
