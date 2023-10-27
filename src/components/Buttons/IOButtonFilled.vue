<template>
  <md-filled-button :class="btnStatus">
    <slot></slot>
  </md-filled-button>
</template>

<script>

export default {
  name: 'IOButtonFilled',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnStatus() {
      return `${this.class}`;
    },
  }
};

</script>

<style>
/* .success {
  --md-filled-button-container-color: var(--success);
} */
</style>