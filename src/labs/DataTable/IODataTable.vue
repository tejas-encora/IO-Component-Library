<template>
  <div style="max-height: 300px; overflow: auto">
    <v-data-table :headers="headers"
                  :items="items"
                  :search="search"
                  :loading="loading"
                  :items-per-page="-1"
                  class="zebra"
                  :show-select="showSelect"
                  :density="density"
                  v-model="selectedItems"
                  item-key="id"
                  :value="selectedItems">
      <template v-for="slot in Object.keys($slots)"
                v-slot:[slot]="slotProps">
        <slot :name="slot"
              v-bind="slotProps"></slot>
      </template>
      <template v-slot:bottom></template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
const emits = defineEmits(['update:selected']);

const props = defineProps({
  selected: Array,
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
  },
  density: {
    type: String,
    default: 'default',
  },
  showSelect: {
    type: Boolean,
    default: false,
  },
});

const search = ref("");
const isSearch = computed(() => props.hasSearch);
const selectedItems = ref([]);

watch(selectedItems, (newSelected) => {
  // Emit a custom event to pass the selected values to the parent component
  emits("selected-update", newSelected);
});

</script>

<style>

tbody tr:nth-child(odd) {
  background: var(--ioUI-sys-light-surface-container);
}
.v-input__details {
  display: none !important;
}
.v-icon
.v-selection-control--dirty {
  color: var(--ioUI-sys-light-primary)
}
.v-table--density-compact > .v-table__wrapper > table > thead > tr > th {
 background: var(--md-sys-color-surface-container-low);
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
  max-height: 400px;
  overflow: auto;
  border: 1px solid;
}
tbody tr:nth-of-type(even) {
   background: var(--md-sys-color-surface-container-low);
 }
 .v-input--checkbox {
    color: red !important;
  }

</style>





