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
              height="32px"
              label="Select" />
    <p>&nbsp;</p>
    <IOTextFieldOutline label="myLabel" />
    <p>&nbsp;</p>
    Data Table
    <IODataTable :headers="headers"
                 :items="items"
                 class="zebra"
                 density="compact"
                 item-value="name"
                 show-select
                 v-model="selected">

      <!-- <template v-slot:item.data-table-select="{ on, props }">
        <IOCheckbox v-bind="props"
                    v-on="on" />
      </template> -->
      
      <template v-slot:item.location="{ item }">
        <IOChipIndicator :label="item.location"
                         :status="getStatus(item)" />
      </template>
      <template v-slot:item.constructionDate="{ item }">
        <div v-if="item.constructionDate === 'c. 2570 BC'">
          <IOSelect :items="selectItems"
                    variant="outlined"
                    density="compact"
                    v-model="selected"
                    height="32px"
                    label="Select"
                    error />
        </div>
        <div v-else>
          {{ item.constructionDate }}
        </div>
      </template>
    </IODataTable>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import IOChipIndicator from "@/components/Chips/IOChipIndicator.vue";
import IODataTable from "@/labs/DataTable/IODataTable.vue";
import IOSelect from "@/components/Select/IOSelect.vue";
import IOCheckbox from "@/components/Checkbox/IOCheckbox.vue";
import vuePackage from "vue/package.json";
import vuetifyPackage from "vuetify/package.json";

const headers = ref([
  { title: "Pyramid", value: "name", sortable: true },
  { title: "Location", value: "location", sortable: true },
  { title: "Construction Date", value: "constructionDate", sortable: true },
  {
    align: "left",
  },
]);

const items = ref([
  {
    id: 1,
    name: "Great Pyramid of Giza",
    location: "Egypta",
    height: "146.6",
    base: "230.4",
    volume: "2583285",
    constructionDate: "c. 2580–2560 BC",
  },
  {
    id: 2,
    name: "Pyramid of Khafre",
    location: "Egyptb",
    height: "136.4",
    base: "215.3",
    volume: "1477485",
    constructionDate: "c. 2570 BC",
  },
  {
    id: 3,
    name: "Red Pyramid",
    location: "Egypt",
    height: "104",
    base: "220",
    volume: "1602895",
    constructionDate: "c. 2590 BC",
  },
  {
    id: 4,
    name: "Bent Pyramid",
    location: "Egyptc",
    height: "101.1",
    base: "188.6",
    volume: "1200690",
    constructionDate: "c. 2600 BC",
  },
  {
    id: 5,
    name: "Pyramid of the Sun",
    location: "Mexico",
    height: "65",
    base: "225",
    volume: "1237097",
    constructionDate: "c. 200 CE",
  },
  {
    id: 6,
    name: "Great Pyramid of Giza",
    location: "Egyptd",
    height: "146.6",
    base: "230.4",
    volume: "2583285",
    constructionDate: "c. 2580–2560 BC",
  },
  {
    id: 7,
    name: "Pyramid of Khafre",
    location: "Egypte",
    height: "136.4",
    base: "215.3",
    volume: "1477485",
    constructionDate: "c. 2570 BC",
  },
  {
    id: 8,
    name: "Red Pyramid",
    location: "Egyptf",
    height: "104",
    base: "220",
    volume: "1602895",
    constructionDate: "c. 2590 BC",
  },
  {
    id: 9,
    name: "Bent Pyramid",
    location: "Egyptg",
    height: "101.1",
    base: "188.6",
    volume: "1200690",
    constructionDate: "c. 2600 BC",
  },
  {
    id: 10,
    name: "Pyramid of the Sun",
    location: "Mexico",
    height: "65",
    base: "225",
    volume: "1237097",
    constructionDate: "c. 200 CE",
  },
]);

const selectItems = ["Option 1", "Option 2", "Option 3"]; // for select component
const vueVersion = vuePackage.version;
const vuetifyVersion = vuetifyPackage.version;
const selected = ref([]);

function getStatus(item) {
  if (item.location === "Egypt") {
    return "success";
  } else if (item.location === "Mexico") {
    return "error";
  } else {
    return "info";
  }
}

</script>

<style>
main {
  padding: 0 15px;
}
</style>