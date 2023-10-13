<template>
  <md-filled-button class="small" disabled aria-disabled="true">
    <slot></slot>
  </md-filled-button>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOButtonFilledSmallDisabled"
};
</script>

<style>
.small {
  height: var(--small)
}
</style>
