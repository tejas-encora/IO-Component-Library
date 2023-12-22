<template>
  <div style="compact"
       height="32">
    <v-select :items="items"
              variant="outlined"
              density="compact"
              height="32px"></v-select>
  </div>
</template>

<script setup>

const props = defineProps ({
  items: {
    type: Array,
  default: () => [],
}
})
</script>
<style lang="scss">
// .v-data-table__td {
//   .v-select .v-field .v-field__input {
//     padding: 4px 0 4px 16px !important;
//   }
// }
</style>
