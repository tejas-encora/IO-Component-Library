<template>
  <div>
    <IOTextField label="Enter your name" v-model="name"></IOTextField>
    <p>{{ message }}</p>
    <IOButtonFilled @click="incCount">Increment</IOButtonFilled>
  </div>
</template>
<script>
import IOTextField  from '@/components/Inputs/IOTextField.vue';
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue';
import { ref, computed } from 'vue';

export default {
  components: {
    IOButtonFilled,
    IOTextField,
  },
  setup() {
    const counter = ref(0);
    const name = ref('');

    const message = computed(() => {
      return `${name.value} clicked the button ${counter.value} times`;
    });

    const incCount = () => {
      counter.value++;
    };

    return {
      counter,
      name,
      message,
      incCount,
    };
  },
};
</script>
