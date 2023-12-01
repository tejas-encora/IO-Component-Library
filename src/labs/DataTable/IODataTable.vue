<template>
    <v-card border max-width="80%" class="mx-auto" :hasSearch="isSearch">
        <IOTextField v-model="search" label="Search" class="full-width" leading-icon icon="magnifying-glass" clear v-if="isSearch" />
        <v-data-table :headers="headers" :items="characters" :search="search" class="zebra" />
    </v-card>
</template>

<script>
import { ref, onMounted } from 'vue'
import IOTextField from '@/components/Inputs/IOTextField.vue'

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
    },
    computed: {
        isSearch() {
            return this.hasSearch;
        }
    },
    setup() {
        const search = ref('')
        const characters = ref([])

        // const headers = [
        //     { text: 'Name', value: 'name' },
        //     { text: 'Race', value: 'race' },
        //     { text: 'Gender', value: 'gender' },
        //     { text: 'Birth', value: 'birth' },
        //     { text: 'Death', value: 'death' }
        // ]

        onMounted(async () => {
            const url = 'https://the-one-api.dev/v2/character'
            const bearerToken = 'rwlpOJMKDeangwftjVsA'

            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch')
                }

                const data = await response.json()
                characters.value = data.docs
            } catch (error) {
                console.error(error)
            }
        })

        return {
            search,
            // headers,
            characters
        }
    }
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
    font-family: 'Lato', sans-serif !important;
}

.v-table .v-icon {
    font-size: 14px;
    height: 20px;
    width: 20px;
}
</style>
