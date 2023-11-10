<template>
  <md-input-chip :variant="variantBool" :notrail="trailingBool">
    <i :class="iconClass" slot="icon" />
  </md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInputLeading',
  props: {
    icon: {
      type: String,
      default: 'book-sparkles'
    },
    variant: {
      type: Boolean,
      default: false
    },
    notrail: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    variantBool() {
      return `${this.variant}`
    },
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
        trailingBool() {
      return `${this.notrail}`;
    },
  }
};
</script>
