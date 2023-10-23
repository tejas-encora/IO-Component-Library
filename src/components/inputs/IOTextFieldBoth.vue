<template>
  <md-filled-text-field label="Label">
    <i :class="icon" slot="leading-icon" />
    <i :class="iconTrailing" slot="trailing-icon" />
  </md-filled-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldBoth",
  props: {
    icon: {
      type: String,
      default: "magnifying-glass",
    },
    
    iconTrailing: {
      type: String,
      default: "circle-x"
    }
  },
  computed: {
    icon() {
      return `fa-light fa-${this.icon}`;
    },
    iconTrailing() {
      return `fa-light fa-${this.iconTrailing}`;
    },
  }
};
</script>

