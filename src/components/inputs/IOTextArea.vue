<template>
  <md-filled-text-field id="md-filled-text-field"
                        type="textarea"
                        rows="5"
                        :error="isError"
                        :error-text="errText"
                        :value="modelValue"
                        @input="updateModelValue">
  </md-filled-text-field>
</template>

<script>
export default {
  name: 'IOTextArea',
  props: {
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
      default: 'magnifying-glass',
    },
    iconEnd: {
      type: String,
      default: 'pencil',
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
    modelValue: {
      type: String,
    },
  },
  computed: {
    setIconStart: function () {
      return `fa-light fa-${this.iconStart}`;
    },
    setIconEnd: function () {
      return this.error
        ? 'fa-solid fa-circle-exclamation'
        : `fa-light fa-${this.iconEnd}`;
    },
    isIconStart: function () {
      return this.leadingIcon;
    },
    isIconEnd: function () {
      return this.trailingIcon;
    },
    isError: function () {
      return this.error && !this.clear;
    },
    errText: function () {
      return this.errorText;
    },
    showClearIcon: function () {
      return this.clear;
    },
  },
  methods: {
    updateModelValue: function (event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

