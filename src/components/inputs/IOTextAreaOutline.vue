<template>
  <md-outlined-text-field type="textarea" label="Label" rows="5" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
     ></md-outlined-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: 'IOTextAreaOutline',
};
</script>
