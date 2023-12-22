<template>
  <md-suggestion-chip :leading-icon="isIconStart"
                      class="indicator"
                      :status="setStatus">
    <i :class="iconClass"
       slot="icon"
       v-if="isIconStart"
       aria-hidden="true" />
  </md-suggestion-chip>
</template>

<script>

export default {
  name: 'IOChipIndicator',
  components: 'md-suggestion-chip',
  props: {
    leadingIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "book-sparkles",
    },
    status: {
      type: String,
      default: "primary",
    }
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
    isIconStart() {
      return this.leadingIcon;
    },
    setStatus() {
      return this.status;
    }
  }
};
</script>
<style scoped>

md-suggestion-chip button {
  font-family: 'Lato', sans-serif !important;
}
.indicator[status] {
  /* --md-suggestion-chip-outline-color: transparent; */
}

.indicator[status='success'] {
  background: var(--md-sys-color-success-light);
}

.indicator[status='error'] {
  background: var(--md-sys-color-error-light);
  color: #fff;
}

.indicator[status='warning'] {
  background: var(--md-sys-color-warning-light);
  color: var(--md-sys-color-warning-light);
}

.indicator[status="info"] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-primary-container);
  --md-suggestion-chip-outline-color: transparent;
  background: var(--ioUI-sys-light-primary-container);
}

.indicator[status='secondary'] {
  background: var(--md-sys-color-secondary);
  color: var(--md-sys-color-on-secondary-container-light);
}

.indicator[status='neutral'] {
  background: #202324;
}
</style>


