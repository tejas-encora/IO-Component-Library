<template>
    <v-card border
            max-width="80%"
            class="mx-auto"
            :hasSearch="isSearch">
        <IOTextField v-model="search"
                     label="Search"
                     class="full-width"
                     leading-icon
                     icon="magnifying-glass"
                     clear />
        <v-data-table-virtual :headers="headers"
                              :items="items"
                              height="400"
                              item-value="name"></v-data-table-virtual>
    </v-card>
</template>

<script>
import IOTextField from "@/components/Inputs/IOTextField.vue"
import { ref } from 'vue'

export default {
    name: 'IODataTableV',
    components: ['IOTextField'],
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        hasSearch: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isSearch() {
            return this.hasSearch;
        }
    },
    setup() {
        const search = ref('')

        return {
            search
        }
    },
}
</script>
<style>
.full-width {
    width: 100%;
}

.vcard {
    /* width: 80% !important; */
    text-align: center !important;
    border: 1px solid !important;
}

.zebra tbody tr:nth-child(even) {
    background-color: var(--md-sys-color-surface-container-low);
}

.v-data-table-header__content {
    font-weight: bold;
}

.v-data-table-header__content,
.v-data-table__td {
    font-family: "Lato", sans-serif !important;
}

.v-table .v-icon {
    font-size: 14px;
    height: 20px;
    width: 20px;
}
</style>
