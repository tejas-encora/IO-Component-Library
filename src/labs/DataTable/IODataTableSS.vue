<template>
    <v-card border
            max-width="80%"
            class="mx-auto"
            :hasSearch="isSearch">
        <IOTextField v-model="search"
                     label="Search"
                     leading-icon
                     icon="magnifying-glass"
                     clear
                     v-if="isSearch" />
        <v-data-table-server :items="items"
                             :hasSearch="isSearch"
                             class="zebra"
                             ></v-data-table-server>
    </v-card>
</template>

<script>
import { ref } from 'vue'
import IOTextField from '@/components/Inputs/IOTextField.vue'

export default {
    name: "IODataTable",
    components: {
        IOTextField,
    },
    props: {
        hasSearch: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        isSearch() {
            return this.hasSearch;
        }
    },
    setup() {
        const search = ref('');

        return {
            search,
        };
    }
};
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
