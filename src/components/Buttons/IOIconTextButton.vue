<template>
  <md-text-button>
    <slot></slot>
    <i class="fa-light fa-circle-plus" slot="icon" />
  </md-text-button>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOIconTextButton"
};
</script>

