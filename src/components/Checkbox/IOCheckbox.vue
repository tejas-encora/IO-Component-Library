<template>
  <md-checkbox touch-target="wrapper" :class="errorClass"></md-checkbox>
</template>

<script>
export default {
  name: 'IOCheckbox',
  props: {
    class: {
        type: String,
        default: ''
      },
  },  
  computed: {
    errorClass() { 
      return `${this.class}`
    },
  }
};
</script>
