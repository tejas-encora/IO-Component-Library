<template>
  <md-outlined-icon-button>
     <i :class="iconClass" />
  </md-outlined-icon-button>
</template>

<script>
import '@/assets/theme.css';
export default {
  name: 'IOIconButtonOutline',
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
