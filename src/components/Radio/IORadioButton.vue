<template>
  <md-radio touch-target="wrapper" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
     ></md-radio>
</template>

<script>
export default {
  name: 'IORadioButton', 
  emits: ['update:modelValue'],
};
</script>
