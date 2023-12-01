<template>
  <main>
    <IOTextField label="Enter your name" v-model="name" trailing-icon clear></IOTextField>
    <p>{{ message }}</p>

    <IOChipFilter label="test" trailingIcon leadingIcon icon="book-sparkles"></IOChipFilter>
    <IOButtonFilled @click="incCount" leadingIcon icon="circle-plus">Increment</IOButtonFilled>
    <IOButtonElevated>IOButtonElevated</IOButtonElevated>

    <p>Hello, {{ fname }} {{ lname }}</p>
    <IOTextField label="First" v-model="fname" error trailing-icon></IOTextField>
    <IOTextField label="Last" v-model="lname"></IOTextField>
    <!-- <IOButtonFilled @click="handleTest">Submit</IOButtonFilled> -->
    <IOCheckbox label="Last" error />
    <IORadioButton />
    <p>&nbsp;</p>

    <IOTextFieldOutline label="Test" error trailing-icon></IOTextFieldOutline>

    <!-- <IODataTableSearch /> -->
    <!-- <IODataTable /> -->
    <IODataTableV hasSearch />
    
     <!-- <IOMenu /> -->
  </main>
</template>

<script>
import IORadioButton from '@/components/Radio/IORadioButton.vue';
import IOMenu from '@/components/Menu/IOMenu.vue';
import IOCheckbox from '@/components/Checkbox/IOCheckbox.vue';
import IOChipFilter from '@/components/Chips/IOChipFilter.vue';
import IOTextField from '@/components/Inputs/IOTextField.vue';
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue';
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue';
import IOButtonElevated from '@/components/Buttons/IOButtonElevated.vue';
import IODataTable from '@/labs/DataTable/IODataTable.vue';
import IODataTableV from '@/labs/DataTable/IODataTableV.vue';
import { ref, computed } from 'vue';

export default {
  components: {
    IOButtonElevated,
    IOButtonFilled,
    IOTextField,
    IOChipFilter,
    IOCheckbox,
    IODataTable,
    IODataTableV,
    IORadioButton,
    IOTextFieldOutline,
    IOMenu
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
