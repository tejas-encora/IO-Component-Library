<template>
  <md-outlined-button class="small" disabled aria-disabled="true">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-outlined-button>
</template>

<script>
export default {
  name: "IOIconButtonOutlineSmallDisabled"
};
import '@/assets/theme.css'
</script>
