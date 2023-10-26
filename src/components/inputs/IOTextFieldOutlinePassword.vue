<template>
  <md-outlined-text-field label="Password" :type="inputType">
    <md-icon-button slot="trailing-icon" @click="handleToggle">
      <md-icon>
        <i :class="currIconClass"></i>
      </md-icon>
    </md-icon-button>
  </md-outlined-text-field>
</template>

<script>
import '@/assets/theme.css'

export default {
  name: "IOTextFieldOutlinePassword",
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
