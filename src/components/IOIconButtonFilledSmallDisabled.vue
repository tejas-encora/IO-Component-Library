<template>
  <md-filled-button class="small" disabled aria-disabled="true">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: "IOIconButtonFilledSmallDisabled"
};
import '@/assets/theme.css'
</script>
