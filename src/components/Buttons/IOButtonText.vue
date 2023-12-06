<template>
  <button
    :class="[setSize, { 'md-icon-button': hasIcon }]"
    :disabled="disabled"
  >
    <slot></slot>
    <i :class="setIcon" v-if="hasIcon" />
  </button>
</template>

<script>
export default {
  name: 'IOTextButton',
  props: {
    size: {
      type: String,
      default: 'md-size--medium',
    },
    icon: {
      type: String,
      default: 'circle-plus',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    leadingIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setSize() {
      return `md-button--${this.size}`;
    },
    setIcon() {
      return `fa fa-${this.icon}`;
    },
    hasIcon() {
      return this.leadingIcon;
    },
  },
};
</script>
