<template>
    <md-filled-text-field label="Label" value="Test Value"></md-filled-text-field>
</template>

<script>
export default {
  mounted() {
    // Check if the DOM is fully loaded
    if (document.readyState === 'complete') {
      this.accessShadowDOM();
    } else {
      window.addEventListener('load', this.accessShadowDOM);
    }
  },
  methods: {
    accessShadowDOM() {
      console.log('Accessing shadow DOM');
      var container = document.querySelector('md-filled-field');
      if (container && container.shadowRoot) {
        const labelElement = container.shadowRoot.querySelector('.label.resting');
        if (labelElement) {
          console.log('yep', labelElement.innerHTML);
          labelElement.style.top = '4px';
        } else {
          console.log("Label element not found in Shadow DOM.");
        }
      } else {
        console.log("md-filled-field or Shadow DOM not found.");
      }
    }
  }
};
</script>
