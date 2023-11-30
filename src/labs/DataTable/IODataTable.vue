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
                {
                    name: 'Lion',
                    species: 'Panthera leo',
                    diet: 'Carnivore',
                    habitat: 'Grasslands, Savanna',
                },
                {
                    name: 'Giraffe',
                    species: 'Giraffa camelopardalis',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Woodlands',
                },
                {
                    name: 'Zebra',
                    species: 'Equus zebra',
                    diet: 'Herbivore',
                    habitat: 'Grasslands, Woodlands',
                },
                {
                    name: 'Hippopotamus',
                    species: 'Hippopotamus amphibius',
                    diet: 'Herbivore',
                    habitat: 'Rivers, Lakes',
                },
                {
                    name: 'Cheetah',
                    species: 'Acinonyx jubatus',
                    diet: 'Carnivore',
                    habitat: 'Grasslands, Savanna',
                },
                {
                    name: 'Rhinoceros',
                    species: 'Diceros bicornis',
                    diet: 'Herbivore',
                    habitat: 'Grasslands, Woodlands',
                },
                {
                    name: 'Gorilla',
                    species: 'Gorilla gorilla',
                    diet: 'Herbivore',
                    habitat: 'Forests, Mountains',
                },
                {
                    name: 'Leopard',
                    species: 'Panthera pardus',
                    diet: 'Carnivore',
                    habitat: 'Forests, Savanna',
                },
                {
                    name: 'Hyrax',
                    species: 'Procavia capensis',
                    diet: 'Herbivore',
                    habitat: 'Rocks, Mountains',
                },
                {
                    name: 'Elephant Seal',
                    species: 'Mirounga leonina',
                    diet: 'Carnivore',
                    habitat: 'Coastlines, Islands',
                },
                {
                    name: 'Wildebeest',
                    species: 'Connochaetes taurinus',
                    diet: 'Herbivore',
                    habitat: 'Grasslands, Savanna',
                },
                {
                    name: 'Chimpanzee',
                    species: 'Pan troglodytes',
                    diet: 'Omnivore',
                    habitat: 'Forests, Woodlands',
                },
                {
                    name: 'Warthog',
                    species: 'Phacochoerus africanus',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Grasslands',
                },
                {
                    name: 'Baboon',
                    species: 'Papio hamadryas',
                    diet: 'Omnivore',
                    habitat: 'Savanna, Mountains',
                },
                {
                    name: 'Meerkat',
                    species: 'Suricata suricatta',
                    diet: 'Omnivore',
                    habitat: 'Deserts, Grasslands',
                },
                {
                    name: 'Honey Badger',
                    species: 'Mellivora capensis',
                    diet: 'Omnivore',
                    habitat: 'Various',
                },
                {
                    name: 'Hyena',
                    species: 'Crocuta crocuta',
                    diet: 'Carnivore',
                    habitat: 'Grasslands, Savanna',
                },
                {
                    name: 'Aardvark',
                    species: 'Orycteropus afer',
                    diet: 'Insectivore',
                    habitat: 'Grasslands, Woodlands',
                },
                {
                    name: 'Ostrich',
                    species: 'Struthio camelus',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Grasslands',
                },
            ],
        };
    },
}
</script>