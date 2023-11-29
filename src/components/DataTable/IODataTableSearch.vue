<template>
    <v-card flat title="Characters" max-width="70%" class="mx-auto" border>
        <IOTextField class="full-width" label="Search" v-model="search" leading-icon icon="magnifying-glass" trailing-icon
            clear></IOTextField>
        <v-data-table :headers="headers" :items="characters" :search="search" class="zebra"></v-data-table>
    </v-card>
</template>

<script>
import IOTextField from '@/components/Inputs/IOTextField.vue';

export default {
    name: 'IODataTableSearch',
    components: {
        IOTextField,
    },
    data() {
        return {
            search: '',
            characters: []
        };
    },
    mounted() {
        const url = 'https://the-one-api.dev/v2/character';
        const bearerToken = 'rwlpOJMKDeangwftjVsA';

        fetch(url, {
            headers: new Headers({
                'Authorization': `Bearer ${bearerToken}`
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                this.characters = data.docs;
            })
            .catch(error => {
                console.error('Error fetching character data:', error);
            });
    }
}
</script>

<style>
.full-width {
    width: 100%;
}

.vcard {
    width: 80% !important;
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
