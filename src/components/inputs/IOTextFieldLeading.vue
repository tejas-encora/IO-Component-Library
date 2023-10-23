<template>
  <md-filled-text-field label="Label">
    <i :class="iconClass" slot="leading-icon" />
  </md-filled-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldLeading",
  props: {
    icon: String,
    default: "magnifying-glass"
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  }
};
</script>

