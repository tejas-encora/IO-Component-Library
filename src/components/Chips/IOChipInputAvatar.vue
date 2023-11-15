<template>
  <md-input-chip avatar>
    <img slot="icon" :src="imgSrc" alt="avatar" aria-hidden="true" />
  </md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInputAvatar',
  props: {
    src: {
      type: String,
    },
  },
  computed: {
    imgSrc() {
      return this.src
    },
  }
};
</script>
