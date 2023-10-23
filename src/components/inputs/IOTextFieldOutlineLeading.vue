<template>
  <md-outlined-text-field label="Label">
    <i :class="iconClass" slot="leading-icon" />
  </md-outlined-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldOutlineLeading",
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

