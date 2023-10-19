<template>
  <md-filled-button>
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-filled-button>
</template>

<script>
export default {
  name: "IOIconButtonFilled"
};
import '@/assets/theme.css'
</script>
