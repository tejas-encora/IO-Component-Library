/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx', // 👈 Add this, to match your project's structure
    '../src/**/*.stories.js'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    'storybook-addon-live-examples',
    'storybook-addon-designs'
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  }
};
export default config;
