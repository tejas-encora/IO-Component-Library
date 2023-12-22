<template>
  <md-suggestion-chip class="indicator"
                      :status="setStatus">
  </md-suggestion-chip>
</template>

<script>

export default {
  name: 'IOChipIndicator',
  components: 'md-suggestion-chip',
  props: {
    status: {
      type: String,
    }
  },
  computed: {
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
  --md-suggestion-chip-outline-color: transparent;
  --md-suggestion-chip-disabled-outline-color: transparent;
}

.indicator[status='primary'] {
--md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-primary-container);
  background: var(--ioUI-sys-light-primary-container);
}

.indicator[status='secondary'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-secondary-container);
  background: var(--ioUI-sys-light-secondary-container);
}
.indicator[status="info"] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-informational-container);
  background: var(--ioUI-sys-light-informational-container);
}

.indicator[status='warning'] {
  background: var(--ioUI-sys-color-warning-light);
}

.indicator[status='error'] {
  background: var(--ioUI-sys-color-error-light);
  border-radius: 24px;
}
.indicator[status='error']:disabled {
  border: none;
}

.indicator[status='success'] {
  background: var(--ioUI-sys-light-success-container);
}

.indicator[status='neutral'] {
  background: var(--ioUI-sys-light-surface-variant);
}
</style>


