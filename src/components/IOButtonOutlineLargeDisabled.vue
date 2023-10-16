<template>
  <md-outlined-button class="large" disabled aria-disabled="true">
    <slot></slot>
  </md-outlined-button>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOButtonOutlineLargeDisabled"
};
</script>

<style>
.large {
  height: var(--large)
}
</style>
