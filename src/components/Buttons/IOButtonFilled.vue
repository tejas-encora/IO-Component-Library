<template>
  <md-filled-button>
    <slot></slot>
  </md-filled-button>
</template>

<script>
export default {
  name: "IOButtonFilled",
  props: {
    label: String,
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.label}`;
    },
  }
};
</script>

