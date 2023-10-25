<template>
  <md-filled-text-field label="Password" :type="inputType">
    <md-icon-button slot="trailing-icon" @click="handleToggle">
      <md-icon>
        <i :class="currIconClass"></i>
      </md-icon>
    </md-icon-button>
  </md-filled-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldPassword",
  data() {
    return {
      isPassVisible: false,
    }
  },
  computed: {
    currIconClass() {
      return this.isPassVisible ? "fa-light fa-eye-slash" : "fa-light fa-eye";
    },
    inputType() {
      return this.isPassVisible ? "text" : "password";
    },
  },
  methods: {
    handleToggle() {
      this.isPassVisible = !this.isPassVisible;
    },
  },
};
</script>
