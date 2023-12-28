<template>
  <div style="compact"
       height="32">
    <v-select :items="items"
              variant="outlined"
              density="compact"
              height="32px"
              :label="label" />
  </div>
</template>

<script setup>

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
  }
});
</script>
<style lang="scss">
.v-table .v-text-field {
  background: white
}
 .v-input--density-compact {
    --v-input-control-height: 32px;
    --v-input-padding-top: 0px;
}
</style>
