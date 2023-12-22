<template>
  <v-card border
          class="mx-auto"
          :hasSearch="isSearch"
          style="max-height: 300px; overflow: auto;">
    <v-data-table :headers="headers"
                  :items="items"
                  :search="search"
                  :loading="loading"
                  :items-per-page="-1"
                  class="zebra">
      <template v-for="slot in Object.keys($slots)"
                v-slot:[slot]="slotProps">
        <slot :name="slot"
              v-bind="slotProps"></slot>
      </template>
      <template v-slot:bottom></template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  hasSearch: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  headers: {
    type: Array,
    required: true,
  }
});

const search = ref("");
const selected = ref([]);
const isSearch = computed(() => props.hasSearch);
console.log('headers', props.headers);
</script>

<style>
.v-input__details {
  display: none;
}

.v-select .v-field .v-field__input {
  padding: 4px 0 4px 16px !important;
}

.vcard {
  text-align: center !important;
  border: 1px solid !important;
  position: relative;
}

.v-list-item__content {
  padding: 0 !important;
}

.v-list-item {
  min-height: 24px !important;
}

.table-wrap {
  max-height: 300px;
  overflow: auto;
  border: 1px solid;
}
</style>
