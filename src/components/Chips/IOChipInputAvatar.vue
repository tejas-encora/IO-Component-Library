<template>
  <md-input-chip :variant="variantBool" avatar :close="closeBool">
    <img slot="icon" :src="imgSrc" alt="avatar" />
  </md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInputAvatar',
  props: {
    variant: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
    },
    close: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    variantBool() {
      return `${this.variant}`
    },
    imgSrc() {
      return `${this.src}`
    },
    closeBool() {
      return `${this.close}`
    },
  }
};
</script>
