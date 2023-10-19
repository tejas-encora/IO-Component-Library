<template>
  <md-filled-button>
    <slot></slot>
    <i :class="iconClass" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: 'IOIconButtonFilled',
  props: {
    icon: String,
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  },
};
</script>
