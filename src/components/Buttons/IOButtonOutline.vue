<template>
  <md-outlined-button :leadingIcon="hasIcon" :size="setSize">
    <slot></slot>
    <i :class="setIcon" slot="icon" v-if="leadingIcon" />
  </md-outlined-button>
</template>

<script>

export default {
  name: 'IOButtonFilled',
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
