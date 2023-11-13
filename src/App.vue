<script setup>

import IOFab from '@/components/Buttons/FAB/IOFab.vue'
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import IOCheckbox from '@/components/Checkbox/IOCheckbox.vue'
import IOChipInput from '@/components/Chips/IOChipInput.vue'
import IOChipAssistSvg from '@/components/Chips/IOChipAssistSvg.vue'
import IOChipAssistLeading from '@/components/Chips/IOChipAssistLeading.vue'
import IOChipInputAvatar from '@/components/Chips/IOChipInputAvatar.vue'
// import IconGrid from '@/components/IconGrid.vue'
// import ColorGrid from '@/components/ColorGrid.vue'
</script>

<template>
  <div class="test">
    <IOButtonFilled class="secondary" size="large">Clickage</IOButtonFilled><br><br>
    <IOFab icon="plus-large" /><br><br>
    <IOCheckbox /><br><br>
    <IOChipInput label="Input Chip"/><br><br>
    <IOChipInputAvatar label="Avatar" src="https://picsum.photos/200" /><br><br>
    <IOChipAssistSvg src="IO.svg" label="Assist Chip Svg"/><br><br>
    <IOChipAssistLeading label="Assist Chip Leading" /><br><br>
  </div>
</template>
