<template>
  <span style="position: relative">
    <md-filled-button id="usage-anchor-2"
      >Set with element ref</md-filled-button
    >
    <md-menu id="usage-menu-2">
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
// Initialize menuEl before trying to set properties on it
const anchorEl = document.body.querySelector('#usage-anchor-2');
const menuEl = document.body.querySelector('#usage-menu-2');

// Check that menuEl is not null before setting properties
if (menuEl) {
  menuEl.anchorElement = anchorEl;

  anchorEl.addEventListener('click', () => {
    if (menuEl) {
      menuEl.open = !menuEl.open;
    }
  });
}
</script>
