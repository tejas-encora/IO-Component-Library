<template>
  <div style="compact"
       height="32">
    <v-select :items="items"
              variant="outlined"
              density="compact"
              v-model="selected"
              height="32px"></v-select>
  </div>
</template>

<script>
export default {
  name: 'IOSelect',
  data() {
    return {
      items: ['Select', 'Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
      selected: null,
    }
  },
  mounted() {
    this.selected = this.items[0]
  }
}     
</script>
<style>
.v-data-table__td {
    .v-select .v-field .v-field__input {
    padding: 4px 0 4px 16px !important;
  }
}
</style>
