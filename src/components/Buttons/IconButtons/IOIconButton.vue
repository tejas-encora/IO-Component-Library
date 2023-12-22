<template>
  <md-icon-button>
     <i :class="iconClass" />
  </md-icon-button>
</template>

<script>
export default {
  name: 'IOIconButton',
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
