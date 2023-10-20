<template>
  <md-filled-text-field label="Label" placeholder="Placeholder" supporting-text="Supporting text">
    <i :class="iconClass" slot="trailing-icon" />
  </md-filled-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextField",
  props: {
    icon: String,
  },
  computed: {
    iconClass() {
      return `fa-light fa-${this.icon}`;
    },
  }
};
</script>

