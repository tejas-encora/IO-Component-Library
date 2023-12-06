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
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Your custom error message',
    },
  },
  computed: {
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

