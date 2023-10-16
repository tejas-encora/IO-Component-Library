<template>
  <md-filled-button class="large">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: "IOIconButtonFilledLarge"
};
import '@/assets/theme.css'
</script>
