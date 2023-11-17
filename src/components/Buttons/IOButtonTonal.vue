<template>
  <md-filled-tonal-button :leadingIcon="hasIcon" :size="setSize">
    <slot></slot>
    <i :class="setIcon" slot="icon" v-if="leadingIcon" />
  </md-filled-tonal-button>
</template>

<script>

export default {
  name: 'IOButtonTonal',
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: String,
      default: "circle-plus"
    },
    leadingIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setSize() {
      return this.size;
    },
    setIcon() {
      return `fa-light fa-${this.icon}`;
    },
    hasIcon() {
      return this.leadingIcon;
    },
  },
};

</script>
