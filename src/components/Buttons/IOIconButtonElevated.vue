<template>
  <md-elevated-button>
    <slot></slot>
    <i :class="iconClass" slot="icon" />
  </md-elevated-button>
</template>

<script>
export default {
  name: 'IOIconButtonElevated',
  props: {
    icon: {
      String,
      default: "circle-plus"
    }
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  },
};
</script>
