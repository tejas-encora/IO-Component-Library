<script setup>
import IOIconButtonFilled from '@/components/Buttons/IOIconButtonFilled.vue'
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import IOTextFieldBoth from '@/components/Inputs/IOTextFieldBoth.vue'
import IOTextField from '@/components/Inputs/IOTextField.vue'
import IOTextFieldPassword from '@/components/Inputs/IOTextFieldPassword.vue'
import IOButtonIconFilled from '@/components/Buttons/IOButtonIconFilled.vue'
// import IconGrid from '@/components/IconGrid.vue'
// import ColorGrid from '@/components/ColorGrid.vue'
</script>

<template>
  <main>
    <IOTextFieldBoth label="Testing"/><br><br>
    <IOTextField label="Testing"/><br><br>
    <IOButtonFilled>Click things</IOButtonFilled><br><br>
    <IOIconButtonFilled icon="pencil">click things</IOIconButtonFilled><br><br>
    <IOTextFieldPassword label="Password" /><br><br>
    <IOButtonIconFilled icon="file-magnifying-glass"/><br><br>
    <!-- <ColorGrid/> -->
  </main>
</template>
