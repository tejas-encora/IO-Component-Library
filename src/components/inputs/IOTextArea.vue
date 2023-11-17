<template>
  <md-filled-text-field type="textarea" label="Label" rows="5" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></md-filled-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: 'IOTextArea',
};
</script>

