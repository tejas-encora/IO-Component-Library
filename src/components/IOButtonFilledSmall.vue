<template>
  <md-filled-button class="small" has-icon="true">
    <slot></slot>
  </md-filled-button>
</template>

<script>
export default {
  name: "IOButtonFilledSmall"
};
import '@/assets/theme.css'
</script>

<style>
.small {
  height: var(--small)
}
</style>
