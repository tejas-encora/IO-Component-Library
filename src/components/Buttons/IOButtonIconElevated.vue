<template>
  <md-elevated-icon-button>
     <i :class="iconClass" />
  </md-elevated-icon-button>
</template>

<script>
import '@/assets/theme.css';
export default {
  name: 'IOButtonIconElevated',
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
