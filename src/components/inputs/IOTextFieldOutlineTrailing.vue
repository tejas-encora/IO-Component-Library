<template>
  <md-outlined-text-field label="Label">
    <i :class="iconClass" slot="trailing-icon" />
  </md-outlined-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldOutlineTrailing",
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
