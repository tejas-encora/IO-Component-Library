<template>
  <md-filled-text-field id="md-filled-text-field"
                        :error="isError"
                        :error-text="errText"
                        :leading-icon="isIconStart"
                        :trailing-icon="setIconEnd"
                        :value="modelValue"
                        @input="updateModelValue">
    <i :class="setIconStart"
         slot="leading-icon"
         v-if="leadingIcon" />
      <i :class="setIconEnd"
         slot="trailing-icon"
         v-if="trailingIcon && !showClearIcon" />
      <i id="circle-x"
         class="fa-light fa-circle-x"
         slot="trailing-icon"
         v-if="showClearIcon"
         @click="clearInput" />
  </md-filled-text-field>
</template>

<script>
export default {
  name: 'IOTextField',
  props: {
    leadingIcon: {
      type: Boolean,
      default: false,
    },
    trailingIcon: {
      type: Boolean,
      default: false,
    },
    iconStart: {
      type: String,
      default: 'magnifying-glass',
    },
    iconEnd: {
      type: String,
      default: 'pencil',
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Oops, this thing needs fixing',
    },
    clear: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
  },
  computed: {
    setIconStart: function () {
      return `fa-light fa-${this.iconStart}`;
    },
    setIconEnd: function () {
      return this.error
        ? 'fa-solid fa-circle-exclamation'
        : `fa-light fa-${this.iconEnd}`;
    },
    isIconStart: function () {
      return this.leadingIcon;
    },
    isIconEnd: function () {
      return this.trailingIcon;
    },
    isError: function () {
      return this.error && !this.clear;
    },
    errText: function () {
      return this.errorText;
    },
    showClearIcon: function () {
      return this.clear;
    },
  },
  methods: {
    updateModelValue: function (event) {
      this.$emit('update:modelValue', event.target.value);
    },
    clearInput: function () {
      document.getElementById('md-filled-text-field').value = '';
      this.$emit('input', '');
      this.$emit('update:clear', true);
      this.$emit('update:error', false);
    },
  },
};
</script>

<style scoped>
i {
  font-size: var(--md-filled-text-field-leading-icon-size);
}

i.fa-circle-x {
  cursor: pointer;
}
</style>
