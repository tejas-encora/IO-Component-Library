<script setup>
import IOButtonFilledSmall from '@/components/IOButtonFilledSmall.vue'
import IOButtonFilledMedium from '@/components/IOButtonFilledMedium.vue'
import IOButtonFilledLarge from '@/components/IOButtonFilledLarge.vue'
import IOIconButtonFilledSmall from '@/components/IOIconButtonFilledSmall.vue'
import IOTextField from '@/components/IOTextField.vue'

</script>

<template>
  <main>
    <IOTextField>IOButton</IOTextField>
    <p>&nbsp;</p>
    <IOButtonFilledLarge>IOButton</IOButtonFilledLarge>
    <p>&nbsp;</p>
    <IOButtonFilledMedium>IOButton</IOButtonFilledMedium>
    <p>&nbsp;</p>
    <IOButtonFilledSmall>IOButton</IOButtonFilledSmall>
    <p>&nbsp;</p>
    <IOIconButtonFilledSmall>IOIconButton</IOIconButtonFilledSmall>
  </main>
</template>
