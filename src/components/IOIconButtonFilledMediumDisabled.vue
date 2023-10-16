<template>
  <md-filled-button disabled aria-disabled="true" class="medium">
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: "IOIconButtonFilledMediumDisabled"
};
import '@/assets/theme.css'
</script>
