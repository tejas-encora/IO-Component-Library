<template>
  <md-filled-button class="large" disabled aria-disabled="true">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: "IOIconButtonFilledLargeDisabled"
};
import '@/assets/theme.css'
</script>
