<template>
  <md-assist-chip
    :elevated="isElevated"
    :leading-icon="isIconStart"
    :svg="isSvg"
  >
    <i
      :class="iconClass"
      slot="icon"
      v-if="isIconStart && !svg"
      aria-hidden="true"
    ></i>
    <img
      slot="icon"
      :src="imgSrc"
      alt=""
      aria-hidden="true"
      v-if="svg && !leadingIcon"
    />
  </md-assist-chip>
</template>

<script>
export default {
  name: 'IOChipAssist',
  props: {
    leadingIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'book-sparkles',
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    svg: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: 'IO.svg',
    },
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
    isIconStart() {
      return this.leadingIcon;
    },
    isElevated() {
      return this.elevated;
    },
    imgSrc() {
      return this.src;
    },
    isSvg() {
      return this.svg;
    },
  },
};
</script>
<style scoped>
.fa-circle-check {
  font-size: 16px;
}
</style>
