<template>
  <v-text-field :error="isError"
                :error-text="errText"
                :leading-icon="isIconStart"
                :trailing-icon="setIconEnd"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                density="compact"
                variant="outlined">
    <i :class="setIconStart"
       slot="leading-icon"
       v-if="leadingIcon" />
    <i :class="setIconEnd"
       slot="trailing-icon"
       v-if="trailingIcon && !showClearIcon" />
    <i id="circle-x"
       class="fa-light fa-circle-x"
       slot="trailing-icon"
       v-if="showClearIcon"
       @click="clearInput" />
  </v-text-field>
</template>

<script>
export default {
  name: 'IOTextFieldOutline',
  props: {
    modelValue: String,
    leadingIcon: {
      type: Boolean,
      default: false,
    },
    trailingIcon: {
      type: Boolean,
      default: false,
    },
    iconStart: {
      type: String,
      default: "magnifying-glass",
    },
    iconEnd: {
      type: String,
      default: "pencil",
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Oops, this thing needs fixing',
    },
    clear: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    setIconStart() {
      return `fa-light fa-${this.iconStart}`;
    },
    setIconEnd() {
      return this.error ? 'fa-solid fa-circle-exclamation' : `fa-light fa-${this.iconEnd}`;
    },
    isIconStart() {
      return this.leadingIcon;
    },
    isIconEnd() {
      return this.trailingIcon;
    },
    isError() {
      return this.error && !this.clear;
    },
    errText() {
      return this.errorText;
    },
    showClearIcon() {
      return this.clear;
    },
  },
  methods: {
    clearInput() {
      this.$emit('update:modelValue', '');
      this.$emit('update:clear', true);
      this.$emit('update:error', false);
    },
  },
};
</script>
<style scoped>
/* i {
  font-size: var(--md-filled-text-field-leading-icon-size);
}
i.fa-circle-x {
  cursor: pointer;
} */
</style>
<style>
.v-input--density-compact {
  --v-input-control-height: 32px !important;
  --v-input-padding-top: 0 !important;
  /* .v-field {
    padding-bottom: 0 !important;
  } */
  .v-field--no-label {
    --v-field-padding-bottom: 0;
  }
  .v-input__details {
    display: none;
  }
}
</style>