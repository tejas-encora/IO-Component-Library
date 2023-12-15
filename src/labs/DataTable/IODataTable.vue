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
                     clear
                     v-if="isSearch" />
        <v-data-table :headers="headers"
                      :items="items"
                      :search="search"
                      :loading="loading"
                      :class="classes">
            <template v-slot:loading>
                <v-skeleton-loader type="table-row@6"></v-skeleton-loader>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { ref, computed } from 'vue';
import IOTextField from '@/components/Inputs/IOTextField.vue';

export default {
    name: 'IODataTable',
    components: {
        IOTextField
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
        }
    },
    setup(props) {
        const loading = ref(props.loading);
        const search = ref('');

        const classes = computed(() => ({
            'loading': loading.value,
        }));

        const isSearch = computed(() => props.hasSearch);

        return {
            search,
            classes,
            isSearch,
        };
    }
};
</script>

<style scoped>
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
    font-family: 'Lato', sans-serif !important;
}

.v-table .v-icon {
    font-size: 14px;
    height: 20px;
    width: 20px;
}
</style>