<template>
  <md-filled-tonal-button>
    <slot></slot>
    <i :class="iconClass" slot="icon" />
  </md-filled-tonal-button>
</template>

<script>
export default {
  name: 'IOIconButtonTonal',
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
