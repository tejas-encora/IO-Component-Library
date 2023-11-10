<template>
  <md-input-chip :variant="variantBool" avatar>
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
    }
  },
  computed: {
    variantBool() {
      return `${this.variant}`
    },
    imgSrc() {
      return `${this.src}`
    },
  }
};
</script>
