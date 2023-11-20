<template>
  <md-outlined-text-field :error="isError" :error-text="errText" :leading-icon="isIconStart"
    :trailing-icon="setIconEnd" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <i :class="setIconStart" slot="leading-icon" v-if="leadingIcon && !showClearIcon" />
    <i :class="setIconEnd" slot="trailing-icon" v-if="trailingIcon && !showClearIcon" />
    <span class="clear-button" slot="trailing-icon" v-if="showClearIcon" @click="clearInput">
      <i class="fa-light fa-circle-x"></i>
    </span>
  </md-outlined-text-field>
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
      default: "circle-x",
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
