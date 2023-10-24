<template>
  <md-outlined-button>
    <slot></slot>
    <i :class="iconClass" slot="icon" />
  </md-outlined-button>
</template>

<script>

export default {
  name: "IOIconButtonOutline",
  props: {
    icon: {
      type: String,
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
