<template>
  <md-elevated-button :size="sizeClass">
    <slot></slot>
  </md-elevated-button>
</template>

<script>

export default {
  name: 'IOButtonElevated',
  props: {
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    sizeClass() {
      return `${this.size}`;
    },
  }
};

</script>