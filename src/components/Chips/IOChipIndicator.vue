<template>
  <md-suggestion-chip class="indicator"
                      :status="setStatus"
                      :variant="setVariant">
  </md-suggestion-chip>
</template>

<script>

export default {
  name: 'IOChipIndicator',
  components: 'md-suggestion-chip',
  props: {
    status: {
      type: String,
    },
    variant: {
      type: Boolean
    },
  },
  computed: {
    setStatus() {
      return this.status;
    },
    setVariant() {
      return this.variant;
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

.indicator[status='primary'][variant='false'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-primary-container);
  background: var(--ioUI-sys-light-primary-container);
}
.indicator[status='primary'][variant='true'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-primary);
  background: var(--ioUI-sys-light-primary);
}
.indicator[status='secondary'][variant='false'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-secondary-container);
  background: var(--ioUI-sys-light-secondary-container);
}
.indicator[status='secondary'][variant='true'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-secondary);
  background: var(--ioUI-sys-light-secondary);
}

.indicator[status="info"][variant='false'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-informational-container);
  background: var(--ioUI-sys-light-informational-container);
}
.indicator[status="info"][variant='true'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-informational);
  background: var(--ioUI-sys-light-informational);
}

.indicator[status='warning'][variant='false'] {
  --md-suggestion-chip-label-text-color: var();
  background: var(--ioUI-sys-light-warning-container);
}
.indicator[status='warning'][variant='true'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-warning);
  background: var(--ioUI-sys-light-warning);
}

.indicator[status='success'][variant='false'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-success-container);
  background: var(--ioUI-sys-light-success-container);
}
.indicator[status='success'][variant='true'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-success);
  background: var(--ioUI-sys-light-success);
}

.indicator[status='error'][variant='false'] {
    --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-error-container);
  background: var(--ioUI-sys-light-error-container);
  border-radius: 24px;
}
.indicator[status='error'][variant='false'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-error);
  background: var(--ioUI-sys-light-error);
  border-radius: 24px;
}

.indicator[status='error'][variant='true'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-on-error);
  background: var(--ioUI-sys-light-error);
  border-radius: 24px;
}


.indicator[status='error']:disabled {
  border: none;
}

.indicator[status='neutral'][variant='false'] {
  background: var(--ioUI-sys-light-surface-variant);
}
.indicator[status='neutral'][variant='true'] {
  --md-suggestion-chip-label-text-color: var(--ioUI-sys-light-inverse-on-surface);
  background: var(--ioUI-sys-light-inverse-surface);
}

</style>


