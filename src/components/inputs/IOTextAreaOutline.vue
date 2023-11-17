<template>
  <md-outlined-text-field type="textarea" rows="5" :error="isError" :error-text="errText" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)">
  </md-outlined-text-field>
</template>

<script>
export default {
  name: 'IOTextAreaOutline',
  props: {
    modelValue: String,
    error: {
      type: String,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Oops, this thing needs fixed',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    isError() {
      return this.error;
    },
    errText() {
      return this.errorText;
    },
  }
};
</script>
