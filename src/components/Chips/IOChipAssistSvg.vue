<template>
  <md-assist-chip>
    <img slot="icon" :src="imgSrc" alt="" />
  </md-assist-chip>
</template>

<script>
export default {
  name: 'IOChipAssistSvg',
  props: {
    src: {
      type: String,
    },
  },
  computed: {
    imgSrc() {
      return `${this.src}`
    },
  }
};
</script>
