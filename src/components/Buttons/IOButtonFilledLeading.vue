<template>
  <md-filled-button label="Label">
    <i :class="iconClass" slot="leading-icon" />
    <slot></slot>
  </md-filled-button>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: 'IOButtonFilledLeading',
  props: {
    icon: {
      type: String,
      default: 'circle-x'
    }
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  }
};
</script>

