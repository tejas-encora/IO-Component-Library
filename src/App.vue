<script setup>

import IOFab from '@/components/Buttons/FAB/IOFab.vue'
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import IOCheckbox from '@/components/Checkbox/IOCheckbox.vue'
import IOChipInputTrailing from '@/components/Chips/IOChipInputTrailing.vue'
// import IconGrid from '@/components/IconGrid.vue'
// import ColorGrid from '@/components/ColorGrid.vue'
</script>

<template>
  <div class="test">
    <IOButtonFilled class="secondary" size="large">Clickage</IOButtonFilled><br><br>
    <IOFab icon="plus-large" /><br><br>
    <IOCheckbox /><br><br>
    <IOChipInputTrailing label="Input Chip"/><br><br>
  </div>
</template>
