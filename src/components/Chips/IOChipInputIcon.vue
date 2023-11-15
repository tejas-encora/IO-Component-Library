<template>
  <md-input-chip>
    <i :class="iconClass" slot="icon"/>
  </md-input-chip>
</template>

<script>
export default {
  name: 'IOChipInputIcon',
  props: {
    icon: {
      type: String,
      default: 'book-sparkles'
    },
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  }
};
</script>
<style scoped>

</style>