<template>
  <md-outlined-text-field type="textarea"
                          rows="5"
                          :error="isError"
                          :error-text="errText"
                          :value="value"
                          @input="handleInput">
  </md-outlined-text-field>
</template>

<script>
export default {
  name: 'IOTextAreaOutline',
  props: {
    value: String,
    error: {
      type: String,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Oops, this thing needs fixed',
    },
  },
  computed: {
    isError() {
      return this.error;
    },
    errText() {
      return this.errorText;
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value); // Emitting 'input' event instead of 'update:modelValue'
    },
  }
};
</script>
