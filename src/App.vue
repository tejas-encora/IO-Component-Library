<template>
  <main>
    <h2>IO Component Library Host</h2>
    <p>Vue Version: {{ vueVersion }}</p>
    <p>Vuetify Version: {{ vuetifyVersion }}</p>
    <p>&nbsp;</p>
    Data Table
    <IODataTable :items="characters" class="zebra" show-select />
  </main>
</template>

<script>
import IODataTable from '@/labs/DataTable/IODataTable.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import vuePackage from 'vue/package.json'
import vuetifyPackage from 'vuetify/package.json'

export default {
  components: {
    IODataTable
  },
  setup() {
    const data = ref([]);
    const characters = ref([]);

    const vueVersion = vuePackage.version;
    const vuetifyVersion = vuetifyPackage.version;

    onMounted(async function () {
      const url = 'https://the-one-api.dev/v2/character';
      const bearerToken = 'rwlpOJMKDeangwftjVsA';

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        characters.value = response.data.docs;
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    });

    return {
      data,
      characters,
      vueVersion,
      vuetifyVersion,
    };
  },
};
</script>
