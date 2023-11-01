<template>
  <p :class="sizeClass">
  <slot></slot>
  </p>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: 'IOBody',
  props: {
    class: String,
    default: 'medium'
  },
    computed: {
    sizeClass() {
      return `${this.class}`;
    },
  }
};
</script>