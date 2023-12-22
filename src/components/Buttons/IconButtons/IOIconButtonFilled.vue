<template>
  <md-filled-icon-button>
     <i :class="iconClass" />
  </md-filled-icon-button>
</template>

<script>
export default {
  name: 'IOIconButtonFilled',
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
