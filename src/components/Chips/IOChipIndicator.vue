<template>
  <md-suggestion-chip :leading-icon="isIconStart">
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
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
    isIconStart() {
      return this.leadingIcon;
    },
  }
};
</script>