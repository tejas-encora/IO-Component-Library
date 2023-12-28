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
                  v-model="selected"
                  item-key="id"
                  @update:selected="emits('update:selected', $event)">
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
const selected = ref([]);
const isSearch = computed(() => props.hasSearch);

watch(selected, () => {
  console.log('watch')
  printSelected();
}, { deep: true });

function printSelected() {
  console.debug(selected.value);
}
</script>

<style>
tbody tr:nth-child(odd) {
  background: var(--ioUI-sys-light-surface-container);
}

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
