<template>
  <md-filter-chip :selected="isSelected" :elevated="isElevated"></md-filter-chip>
</template>

<script>
export default {
  name: 'IOChipFilter',
  props: {
    variant: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isSelected() {
      return `${this.variant}`
    },
    isElevated() {
      return `${this.elevated}`
    },
  }
};
</script>
