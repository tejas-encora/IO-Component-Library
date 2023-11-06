<script setup>
  import "@/assets/theme.css";
  import { getCurrentInstance } from "vue";

  const { appContext } = getCurrentInstance();
  appContext.app.use(mockRouter);
</script>
<template>
  <div class="wrapper">
    <slot />
  </div>
</template>