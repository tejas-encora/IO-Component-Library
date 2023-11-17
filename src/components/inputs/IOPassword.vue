<template>
  <md-filled-text-field :error="isError" :error-text="errText" label="Password" :type="inputType" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)">
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
  name: "IOPassword",
  props: {
    error: {
      type: String,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Oops, this thing needs fixed',
    },
  },
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
    isError() {
      return this.error;
    },
    errText() {
      return this.errorText;
    },
  },
  methods: {
    handleToggle() {
      this.isPassVisible = !this.isPassVisible;
    },
  },
};
</script>
