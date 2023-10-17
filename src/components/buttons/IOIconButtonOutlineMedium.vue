<template>
  <md-outlined-button class="medium">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-outlined-button>
</template>

<script>
export default {
  name: "IOIconButtonOutlineMedium"
};
import '@/assets/theme.css'
</script>
