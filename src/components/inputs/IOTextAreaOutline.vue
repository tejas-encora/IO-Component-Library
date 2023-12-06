<template>
  <md-outlined-text-field
                        type="textarea"
                        rows="5"
                        :error="isError"
                        :error-text="errText"
                        :value="modelValue"
                        @input="updateModelValue">
  </md-outlined-text-field>
</template>

<script>
export default {
  name: 'IOTextAreaOutline',
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Your custom error message',
    },
    modelValue: {
      type: String,
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

