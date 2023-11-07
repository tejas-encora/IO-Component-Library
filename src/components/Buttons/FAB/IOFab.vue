<template>
  <md-fab :variant="variantClass">
    <i :class="iconClass" slot="icon" />
  </md-fab>
</template>

<script>
import '@/assets/theme.css';
export default {
  name: 'IOFab',
  props: {
    icon: {
      type: String,
      default: 'plus-large'
    },
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
    variantClass() {
      return `${this.variant}`;
    },
  }
};

</script>
