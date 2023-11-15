<template>
    <md-filled-text-field :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></md-filled-text-field>
</template>

<script>
export default {
  name: 'IOTextField',
  props: ['modelValue'],
  emits: ['update:modelValue']
};
</script>
