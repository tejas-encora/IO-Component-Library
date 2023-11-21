<template>
  <md-input-chip :avatar="hasAvatar" :leading-icon="isIconStart" :selected="isSelected">
    <img slot="icon" :src="imgSrc" alt="avatar" aria-hidden="true" v-if="avatar && !leadingIcon && !selected" />
    <i :class="iconClass" slot="icon" v-if="isIconStart && !avatar" />
    <i class="fa-solid fa-circle-check" slot="icon" v-if="selected && avatar && !isIconStart" />
  </md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInput',
  props: {
    leadingIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "book-sparkles",
    },
    src: {
      type: String,
    },
    avatar: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return this.src;
    },
    hasAvatar() {
      return this.avatar;
    },
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
    isIconStart() {
      return this.leadingIcon;
    },
    isSelected() {
      return this.selected;
    },
  }
};
</script>
<style scoped>
  .fa-circle-check {
    font-size: 16px;
  }
</style>