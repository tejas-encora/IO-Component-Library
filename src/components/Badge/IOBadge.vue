<template>
  <md-badge :size="sizeClass" class="md-badge">
    <slot></slot>
  </md-badge>
</template>

<script>
export default {
  name: 'IOBadge',
  props: {
    size: {
      type: String,
      default: 's-large',
    },
  },
  computed: {
    sizeClass() {
      return `${this.size}`;
    },
  }
};
</script>
<style scoped>
.md-badge {
  background: var(--md-sys-color-error-light);
  border-radius: 100px;
  color: var(--md-sys-color-on-error-light);
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
}

.md-badge[size="small"] {
  width: 6px;
  height: 6px;
}

.md-badge[size="s-large"] {
  display: flex;
  width: 14px;
  height: 14px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

.v-data-table .md-badge[size="m-large"] {
  display: inline-block;
  padding: 0 4px;
}
</style>