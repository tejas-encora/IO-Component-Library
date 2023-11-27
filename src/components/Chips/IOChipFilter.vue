<template>
  <md-filter-chip :leadingIcon="hasIcon" :trailingIcon="hasTrailing">
    <slot></slot>
    <i :class="setIcon" slot="leading-icon" v-if="leadingIcon" />
    <i :class="setTrailing" slot="trailing-icon" v-if="trailingIcon" />
  </md-filter-chip>
</template>

<script>

export default {
  name: 'IOChipFilter',
  props: {
    icon: {
      type: String,
      default: "book-sparkles",
    },
    leadingIcon: {
      type: Boolean,
      default: false,
    },
    trailingIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setIcon() {
      return `fa-light fa-${this.icon}`;
    },
    setTrailing() {
      return 'fa-solid fa-caret-down';
    },
    hasIcon() {
      return this.leadingIcon;
    },
    hasTrailing() {
      return this.trailingIcon;
    },
  },
};

</script>
