<template>
    <md-filled-text-field label="Password" type="password">
      <md-icon-button slot="trailing-icon">
        <md-icon><i class="fa-light fa-eye" /></md-icon>
    </md-icon-button>
    </md-filled-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldPassword",
  data() {
    return {
      currIcon: "fa-eye",
        isPassVisible: false,
      }
  },
  methods: {
    toggleVisibility() {
      this.isPassVisible = !this.isPassVisible;
      this.currIcon = this.isPassVisible ? "fa-eye" : "fa-eye-slash";
    }
  }
};
</script>

