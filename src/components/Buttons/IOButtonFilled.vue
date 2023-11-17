<template>
  <md-filled-button :leadingIcon="hasIcon" :status="setStatus" :size="setSize" :class="setClass">
    <slot></slot>
    <i :class="setIcon" slot="icon" v-if="leadingIcon" />
  </md-filled-button>
</template>

<script>

export default {
  name: 'IOButtonFilled',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    icon: {
      type: String,
      default: "circle-plus",
    },
    class: {
      type: String,
      default: 'primary',
    },
    status: {
      type: String,
      default: 'none',
    },
    leadingIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setStatus() {
      return this.status;
    },
    setSize() {
      return this.size;
    },
    setClass() {
      return this.class;
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
