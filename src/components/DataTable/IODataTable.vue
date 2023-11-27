<template>
    <v-data-table :items="items" />
</template>

<script>
export default {
    name: 'IODataTable',
    data() {
        return {
            items: [
                {
                    name: 'African Elephant',
                    species: 'Loxodonta africana',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Forests',
                },
            ],
        };
    },
}
</script>