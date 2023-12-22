<template>
  <v-text-field  density="compact"
                variant="outlined"
                clearable
                prepend-inner-icon="fa fa-light fa-book-sparkles" />
</template>

<script>
export default {
  name: 'IOTextFieldOutline',
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  
};
</script>
