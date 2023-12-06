<template>
  <md-elevated-button :leading-icon="hasIcon" :size="setSize">
    <slot></slot>
    <i :class="setIcon" slot="icon" v-if="leadingIcon"></i>
  </md-elevated-button>
</template>

<script>
export default {
  name: 'IOButtonElevated',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    icon: {
      type: String,
      default: 'circle-plus',
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
