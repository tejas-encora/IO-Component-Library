<template>
  <md-filled-button class="medium">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: "IOIconButtonFilledMedium"
};
import '@/assets/theme.css'
</script>
