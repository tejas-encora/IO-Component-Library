<template>
  <md-assist-chip :class="{ 'elevated': isElevated }"></md-assist-chip>
</template>

<script>
export default {
  name: 'IOChipAssist',
  computed: {
    isElevated() {
      return this.elevated;
    }
  }
};
</script>
