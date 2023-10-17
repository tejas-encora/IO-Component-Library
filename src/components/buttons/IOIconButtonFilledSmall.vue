<template>
  <md-filled-button class="small">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: "IOIconButtonFilledSmall"
};
import '@/assets/theme.css'
</script>
