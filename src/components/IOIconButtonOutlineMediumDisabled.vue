<template>
  <md-outlined-button disabled aria-disabled="true" class="medium">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-outlined-button>
</template>

<script>
export default {
  name: "IOIconButtonOutlineMediumDisabled"
};
import '@/assets/theme.css'
</script>
