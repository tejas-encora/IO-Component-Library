<script setup>
import IOButtonFilledSmall from '@/components/IOButtonFilledSmall.vue'
import IOIconButtonFilledSmall from '@/components/IOIconButtonFilledSmall.vue'

</script>

<template>
  <main>
    <md-filled-button>
      <slot></slot>
    </md-filled-button>

    <IOButtonFilledSmall>IOButton</IOButtonFilledSmall>
    <p>&nbsp;</p>
    <IOIconButtonFilledSmall>IOIconButton</IOIconButtonFilledSmall>
  </main>
</template>
