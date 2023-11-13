<template>
  <md-assist-chip :class="{ 'elevated': isElevated}">
    <i :class="setIcon" slot="icon" />
  </md-assist-chip>
</template>

<script>
export default {
  name: 'IOChipAssistLeading',
  props: {
    icon: {
      type: String,
      default: 'book-sparkles'
    },
  },
  computed: {
    setIcon() {
      return `fa-light fa-${this.icon}`;
    },
    isElevated() {
      return this.elevated;
    }
  }
};
</script>
