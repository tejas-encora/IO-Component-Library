<template>
  <a href="#" :class="sizeClass">
  <slot></slot>
  </a>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: 'IOLink',
  props: {
    size: {
      type: String,
      default: ''
    },
    computed: {
      sizeClass () {
        return `${this.size}`
      }
    }
  }
};
</script>
<style scoped>
body {
   font-family: 'Lato', sans-serif;
}
</style>