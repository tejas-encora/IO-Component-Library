<template>
  <md-filled-tonal-icon-button>
     <i :class="iconClass" />
  </md-filled-tonal-icon-button>
</template>

<script>
import '@/assets/theme.css';
export default {
  name: 'IOIconButtonTonal',
  props: {
    icon: {
      type: String,
      default: 'file-magnifying-glass'
    }
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  }
};

</script>
