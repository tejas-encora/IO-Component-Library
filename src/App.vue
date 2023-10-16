<script setup>
import IOButtonFilledSmall from '@/components/IOButtonFilledSmall.vue'
import IOButtonFilledMedium from '@/components/IOButtonFilledMedium.vue'
import IOButtonFilledLarge from '@/components/IOButtonFilledLarge.vue'
import IOIconButtonFilledSmall from '@/components/IOIconButtonFilledSmall.vue'

</script>

<template>
  <main>
    <md-filled-button>
      <slot></slot>
    </md-filled-button>
    <IOButtonFilledLarge>IOButton</IOButtonFilledLarge>
    <p>&nbsp;</p>
    <IOButtonFilledMedium>IOButton</IOButtonFilledMedium>
    <p>&nbsp;</p>
    <IOButtonFilledSmall>IOButton</IOButtonFilledSmall>
    <p>&nbsp;</p>
    <IOIconButtonFilledSmall>IOIconButton</IOIconButtonFilledSmall>
  </main>
</template>
