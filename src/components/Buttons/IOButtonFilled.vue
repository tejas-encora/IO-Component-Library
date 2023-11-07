<template>
  <md-filled-button :class="btnStatus" :size="sizeClass">
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
    sizeClass() {
      return `${this.size}`;
    },
  }
};

</script>