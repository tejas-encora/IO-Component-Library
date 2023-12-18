<template>
  <v-card border class="mx-auto" :hasSearch="isSearch">
    <IOTextField
      v-model="search"
      label="Search"
      class="full-width"
      leading-icon
      icon="magnifying-glass"
      clear
      v-if="isSearch"
    />
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :class="classes"
      show-select
      v-model="selected"
      :hide-default-header="true"
      :hide-default-footer="true"
      :loading="loading"
    >
      <template v-slot:loading>
        <v-skeleton-loader boilerplate type="list-item-avatar" :loading="true"></v-skeleton-loader>
      </template>
      <template v-slot:top> </template>
      <template v-slot:item.race="{ value }">
        <IOChipIndicator :label="value" />
      </template>
      <template v-slot:bottom> </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";
import IOTextField from "@/components/Inputs/IOTextField.vue";
import IOChipIndicator from "@/components/Chips/IOChipIndicator.vue";
export default {
  name: "IODataTable",
  components: {
    IOTextField,
    IOChipIndicator,
  },
  props: {
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
  },
  setup(props) {
    const loading = ref(props.loading);
    const search = ref("");

    const classes = computed(() => ({
      loading: loading.value,
    }));

    const isSearch = computed(() => props.hasSearch);

    return {
      search,
      classes,
      isSearch,
      selected: [],
      singleSelect: false,
    };
  },
};
</script>

<style scoped>
.vcard {
  /* width: 80% !important; */
  text-align: center !important;
  border: 1px solid !important;
}
</style>
