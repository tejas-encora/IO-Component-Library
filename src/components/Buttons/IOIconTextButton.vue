<template>
  <md-text-button>
    <slot></slot>
    <i :class="iconClass" slot="icon" />
  </md-text-button>
</template>

<script>
export default {
  name: "IOIconTextButton",
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
  }
};
</script>

