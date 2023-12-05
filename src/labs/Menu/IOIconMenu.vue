<template>
  <span style="position: relative">
    <IOIconButtonFilled id="anchor"/>
    <md-menu id="option-menu">
      <md-menu-item>
        <div slot="headline">Apple</div>
      </md-menu-item>
      <md-menu-item>
        <div slot="headline">Banana</div>
      </md-menu-item>
      <md-menu-item>
        <div slot="headline">Cucumber</div>
      </md-menu-item>
    </md-menu>
  </span>
</template>

<script type="module">
import IOIconButtonFilled from '@/components/Buttons/IconButtons/IOIconButtonFilled.vue';

export default {
  name: 'IOIconMenu',
  components: {
    IOIconButtonFilled,
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const anchorEl = document.getElementById('anchor');
  const menuEl = document.getElementById('option-menu');

  if(anchorEl && menuEl) {
    menuEl.anchorElement = anchorEl;

    anchorEl.addEventListener('click', () => {
      menuEl.open = !menuEl.open;
    });
  }
});
</script>
