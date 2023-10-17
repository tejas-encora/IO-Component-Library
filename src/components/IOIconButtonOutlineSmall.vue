<template>
  <md-outlined-button class="small">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-outlined-button>
</template>

<script>
export default {
  name: "IOIconButtonOutlineSmall"
};
import '@/assets/theme.css'
</script>
