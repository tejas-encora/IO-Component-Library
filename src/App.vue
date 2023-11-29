<template>
  <main>
    <IOTextField label="Enter your name" v-model="name" trailing-icon clear></IOTextField>
    <p>{{ message }}</p>

    <IOChipFilter label="test" trailingIcon leadingIcon icon="book-sparkles"></IOChipFilter>
    <IOButtonFilled @click="incCount" leadingIcon icon="circle-plus">Increment</IOButtonFilled>
    <IOButtonElevated>IOButtonElevated</IOButtonElevated>

    <p>Hello, {{ fname }} {{ lname }}</p>
    <IOTextField label="First" v-model="fname" error></IOTextField>
    <IOTextField label="Last" v-model="lname"></IOTextField>
    <!-- <IOButtonFilled @click="handleTest">Submit</IOButtonFilled> -->
    <IOCheckbox label="Last" error />
    <p>&nbsp;</p>
    <IODataTableSearch />
  </main>
</template>

<script>
import IOCheckbox from '@/components/Checkbox/IOCheckbox.vue';
import IOChipFilter from '@/components/Chips/IOChipFilter.vue';
import IOTextField from '@/components/Inputs/IOTextField.vue';
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue';
import IOButtonElevated from '@/components/Buttons/IOButtonElevated.vue';
import IODataTableSearch from '@/components/DataTable/IODataTableSearch.vue';
import { ref, computed } from 'vue';

export default {
  components: {
    IOButtonElevated,
    IOButtonFilled,
    IOTextField,
    IOChipFilter,
    IOCheckbox,
    IODataTableSearch
  },
  setup() {
    const counter = ref(0);
    const name = ref('bonzo');
    const fname = ref('');
    const lname = ref('');

    const message = computed(() => {
      return `${name.value} clicked the button ${counter.value} times`;
    });
    // const fullName = computed(() => {
    //   return `Hello, ${fname.value} ${lname.value}!`;
    // });
    const handleTest = () => {
      alert('yep')
    }
    const incCount = () => {
      counter.value++;
    };

    return {
      counter,
      name,
      fname,
      lname,
      message,
      incCount,
    };
  },
};
</script>
