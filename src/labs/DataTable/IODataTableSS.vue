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
        <v-data-table-server v-model:items-per-page="itemsPerPage"
                             :headers="headers"
                             :items-length="totalItems"
                             :items="serverItems"
                             :loading="loading"
                             item-value="name"
                             :hasSearch="isSearch"
                             @update:options="loadItems"></v-data-table-server>
    </v-card>
</template>

<script>
import { ref, onMounted } from "vue";
import IOTextField from "@/components/Inputs/IOTextField.vue";

const desserts = [
    {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1',
    },
    {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0',
    },
    {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6',
    },
    {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7',
    },
    {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16',
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1',
    },
    {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2',
    },
    {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8',
    },
    {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45',
    },
    {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22',
    },
]
const FakeAPI = {
    async fetch({ page, itemsPerPage, sortBy }) {
        return new Promise(resolve => {
            setTimeout(() => {
                const start = (page - 1) * itemsPerPage
                const end = start + itemsPerPage
                const items = desserts.slice()

                if (sortBy.length) {
                    const sortKey = sortBy[0].key
                    const sortOrder = sortBy[0].order
                    items.sort((a, b) => {
                        const aValue = a[sortKey]
                        const bValue = b[sortKey]
                        return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
                    })
                }

                const paginated = items.slice(start, end)

                resolve({ items: paginated, total: items.length })
            }, 500)
        })
    },
}

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
    },
    computed: {
        isSearch() {
            return this.hasSearch;
        },
    },
    data: () => ({
        itemsPerPage: 5,
        headers: [
            {
                title: 'Dessert (100g serving)',
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'Calories', key: 'calories', align: 'end' },
            { title: 'Fat (g)', key: 'fat', align: 'end' },
            { title: 'Carbs (g)', key: 'carbs', align: 'end' },
            { title: 'Protein (g)', key: 'protein', align: 'end' },
            { title: 'Iron (%)', key: 'iron', align: 'end' },
        ],
        serverItems: [],
        loading: true,
        totalItems: 0,
    }),
    methods: {
        loadItems({ page, itemsPerPage, sortBy }) {
            this.loading = true
            FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
                this.serverItems = items
                this.totalItems = total
                this.loading = false
            })
        },
    },
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
}</style>
