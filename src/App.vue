<script setup>
import IOIconButtonFilled from '@/components/Buttons/IOIconButtonFilled.vue'
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import IOTextFieldBoth from '@/components/Inputs/IOTextFieldBoth.vue'
import IOTextFieldPassword from '@/components/Inputs/IOTextFieldPassword.vue'
</script>

<template>
  <main>
    <IOTextFieldBoth label="Testing"/><br><br>
    <IOTextField label="Testing"/><br><br>
    <IOIconButtonFilled icon="pencil">Click things</IOIconButtonFilled><br><br>
    <IOTextFieldPassword label="Password" />
  </main>
</template>
 