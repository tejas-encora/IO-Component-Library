<template>
  <md-outlined-button>
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-outlined-button>
</template>

<script>
export default {
  name: "IOIconButtonOutline"
};
import '@/assets/theme.css'
</script>
