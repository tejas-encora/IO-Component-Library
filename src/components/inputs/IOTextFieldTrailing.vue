<template>
  <md-filled-text-field label="Label">
    <i :class="iconClass" slot="trailing-icon" />
  </md-filled-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldTrailing",
  props: {
    icon: String,
    default: "circle-x"
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  }
};
</script>
