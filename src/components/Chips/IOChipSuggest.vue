<template>
  <md-suggestion-chip :elevated="isElevated" :leading-icon="isIconStart">
    <i :class="iconClass" slot="icon" v-if="isIconStart" aria-hidden="true" />
  </md-suggestion-chip>
</template>

<script>
export default {
  name: 'IOChipsuggestion',
  props: {
    leadingIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "book-sparkles",
    },
    elevated: {
      type: Boolean,
      default: false,
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
  }
};
</script>
<style scoped>
.fa-circle-check {
  font-size: 16px;
}
</style>