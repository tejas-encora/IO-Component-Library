<template>
  <md-suggestion-chip :leading-icon="isIconStart">
    <i :class="iconClass" slot="icon" v-if="isIconStart" aria-hidden="true" />
  </md-suggestion-chip>
</template>

<script>
import IOChipIndicator from "@/components/Chips/IOChipIndicator.vue";
export default {
  name: 'IOChipsuggestion',
  components: 'md-suggestion-chip',
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
<style scoped>
  md-suggestion-chip button {
    font-family: 'Lato', sans-serif !important;
  }
</style>