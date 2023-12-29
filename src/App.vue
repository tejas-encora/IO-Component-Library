<template>
  <div class="container">
    <v-row>
      <v-col cols="12">
        <h2>IO Component Library Host</h2>
        <p>Vue Version: {{ vueVersion }}</p>
        <p>Vuetify Version: {{ vuetifyVersion }}</p>
        <p>Selected: {{ selected }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <IOChipIndicator label="123"
                         status="info" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <IOSelect :items="selectItems"
                  variant="outlined"
                  density="compact"
                  v-model="selected"
                  height="32px"
                  label="Select" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <IOTextFieldOutline label="myLabel" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>Data Table</h3>
        <IODataTable :headers="headers"
                     :items="items"
                     class="zebra"
                     density="compact"
                     item-value="name"
                     show-select
                     @selected-update="handleSelectedUpdate"
                     v-model="selectedItems">
          <!-- Slot for customizing the "Location" column -->
          <template v-slot:item.location="{ item }">
            <IOChipIndicator :label="item.location"
                             :status="getStatus(item)" />
          </template>

          <!-- Slot for customizing the "Construction Date" column -->
          <template v-slot:item.constructionDate="{ item }">
            <div v-if="item.constructionDate === 'c. 2570 BC'">
              <IOSelect :items="selectItems"
                        variant="outlined"
                        density="compact"
                        v-model="selected"
                        height="32px"
                        label="Select" />
            </div>
            <div v-else>
              {{ item.constructionDate }}
            </div>
          </template>
        </IODataTable>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from "vue";
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
const singleSelect = ref(false);

function getStatus(item) {
  if (item.location === "Egypt") {
    return "success";
  } else if (item.location === "Mexico") {
    return "error";
  } else {
    return "info";
  }
}

function handleSelectedUpdate(newSelected) { 
  // Handle the selected item objects updated event
  console.log("Selected items:", JSON.stringify(newSelected, null, 2));
}

</script>

<style>
main {
  padding: 0 15px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}</style>