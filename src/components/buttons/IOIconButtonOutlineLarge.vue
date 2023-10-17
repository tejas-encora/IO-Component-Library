<template>
  <md-outlined-button class="large">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-outlined-button>
</template>

<script>
export default {
  name: "IOIconButtonOutlineLarge"
};
import '@/assets/theme.css'
</script>
