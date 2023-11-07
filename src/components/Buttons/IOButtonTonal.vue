<template>
  <md-filled-tonal-button :class="sizeClass">
    <slot></slot>
  </md-filled-tonal-button>
</template>

<script>
export default {
  name: "IOButtonTonal",
  props: {
    class: {
      type: String,
      default: '',
    }
  },
  computed: {
    sizeClass() {
      return `${this.class}`;
    },
  }
};
</script>

