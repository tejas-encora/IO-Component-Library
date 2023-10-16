<template>
  <md-filled-button class="large" disabled aria-disabled="true">
    <slot></slot>
  </md-filled-button>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOButtonFilledLargeDisabled"
};
</script>

<style>
.large {
  height: var(--large)
}
</style>
