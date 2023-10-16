<template>
  <md-outlined-button class="large" disabled aria-disabled="true">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-outlined-button>
</template>

<script>
export default {
  name: "IOIconButtonFilledLargeDisabled"
};
import '@/assets/theme.css'
</script>
