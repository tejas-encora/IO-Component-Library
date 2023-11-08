<template>
  <main class="test">
    <md-filled-button :status="btnStatus" :size="sizeClass" :class="typeClass">
      <slot></slot>
    </md-filled-button>
  </main>
</template>

<script>

export default {
  name: 'IOButtonFilled',
  props: {
    class: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnStatus() {
      return `${this.status}`;
    },
    sizeClass() {
      return `${this.size}`;
    },
    typeClass() {
      return `${this.class}`;
    },
  },
};

</script>
<style>
.test {
  background-color: var(--md-surfaces-surface1-light)
}
</style>