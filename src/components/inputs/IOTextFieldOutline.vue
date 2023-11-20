<template>
  <md-outlined-text-field :error="isError" :error-text="errText" :leadingIcon="isIconStart" :trailingIcon="setIconEnd"
    :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <i :class="setIconStart" slot="leading-icon" v-if="leadingIcon" />
    <i :class="setIconEnd" slot="trailing-icon" v-if="trailingIcon" />
  </md-outlined-text-field>
</template>

<script>
//const showClass = error ? 'fa-solid fa-circle-exclamation' : `fa-light fa-${this.iconEnd}`;

export default {
  name: 'IOTextFieldOutline',
  props: {
    modelValue: String,
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
      default: "magnifying-glass",
    },
    iconEnd: {
      type: String,
      default: "circle-x",
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Oops, this thing needs fixed',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    setIconStart() {
      return `fa-light fa-${this.iconStart}`;
    },
    setIconEnd() {
      return this.error ? 'fa-solid fa-circle-exclamation' : `fa-light fa-${this.iconEnd}`;
    },
    isIconStart() {
      return this.leadingIcon;
    },
    isIconEnd() {
      return this.trailingIcon;
    },
    isError() {
      return this.error;
    },
    errText() {
      return this.errorText;
    },
  }
};
</script>