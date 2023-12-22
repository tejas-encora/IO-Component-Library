<template>
  <main>
    <h2>IO Component Library Host</h2>
    <p>Vue Version: {{ vueVersion }}</p>
    <p>Vuetify Version: {{ vuetifyVersion }}</p>
    <p>&nbsp;</p>
    <IOChipIndicator label="123"
                     status="info" />
    <p>&nbsp;</p>
    <IOSelect :items="selectItems"
              variant="outlined"
              density="compact"
              v-model="selected"
              height="32px" />
    <p>&nbsp;</p>
    <IOTextFieldOutline label="myLabel" />
    <p>&nbsp;</p>
    Data Table
    <IODataTable :headers="headers"
                 :items="items"
                 class="zebra"
                 show-select
                 density="compact">
      <template v-slot:item.location="{ item }">
        <div v-if="item.name === 'Red Pyramid'">
          <IOChipIndicator :label="item.location" status="success" />
        </div>
        <div v-else-if="item.location === 'Egypta'">
          <IOSelect :items="selectItems"
                    variant="outlined"
                    density="compact"
                    v-model="selected"
                    height="32px" />
        </div>
        <div v-else>
          {{ item.location }}
        </div>
      </template>
    </IODataTable>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import IOChipIndicator from '@/components/Chips/IOChipIndicator.vue';
import IODataTable from '@/labs/DataTable/IODataTable.vue';
import IOSelect from '@/components/Select/IOSelect.vue';
import vuePackage from 'vue/package.json';
import vuetifyPackage from 'vuetify/package.json';

const headers = ref([
  { title: 'Pyramid', value: 'name' },
  { title: 'Location', value: 'location' },
  { title: 'Construction Date', value: 'constructionDate' },
  {
    align: 'left',
  },
]);

const items = [
  {
    name: 'Great Pyramid of Giza',
    location: 'Egypta',
    height: '146.6',
    base: '230.4',
    volume: '2583285',
    constructionDate: 'c. 2580–2560 BC',
  },
  {
    name: 'Pyramid of Khafre',
    location: 'Egyptb',
    height: '136.4',
    base: '215.3',
    volume: '1477485',
    constructionDate: 'c. 2570 BC',
  },
  {
    name: 'Red Pyramid',
    location: 'Egypt',
    height: '104',
    base: '220',
    volume: '1602895',
    constructionDate: 'c. 2590 BC',
  },
  {
    name: 'Bent Pyramid',
    location: 'Egyptc',
    height: '101.1',
    base: '188.6',
    volume: '1200690',
    constructionDate: 'c. 2600 BC',
  },
  {
    name: 'Pyramid of the Sun',
    location: 'Mexico',
    height: '65',
    base: '225',
    volume: '1237097',
    constructionDate: 'c. 200 CE',
  },
  {
    name: 'Great Pyramid of Giza',
    location: 'Egyptd',
    height: '146.6',
    base: '230.4',
    volume: '2583285',
    constructionDate: 'c. 2580–2560 BC',
  },
  {
    name: 'Pyramid of Khafre',
    location: 'Egypte',
    height: '136.4',
    base: '215.3',
    volume: '1477485',
    constructionDate: 'c. 2570 BC',
  },
  {
    name: 'Red Pyramid',
    location: 'Egyptf',
    height: '104',
    base: '220',
    volume: '1602895',
    constructionDate: 'c. 2590 BC',
  },
  {
    name: 'Bent Pyramid',
    location: 'Egyptg',
    height: '101.1',
    base: '188.6',
    volume: '1200690',
    constructionDate: 'c. 2600 BC',
  },
  {
    name: 'Pyramid of the Sun',
    location: 'Mexico',
    height: '65',
    base: '225',
    volume: '1237097',
    constructionDate: 'c. 200 CE',
  },
];

const selectItems = [
  'Option 1', 'Option 2', 'Option 3'
];

const vueVersion = vuePackage.version;
const vuetifyVersion = vuetifyPackage.version;

</script> 

<style>
main {
  padding: 0 15px;
}
</style>
