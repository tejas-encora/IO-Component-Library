/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*stories.mdx',
    '../src/**/*.stories.js'
  ],
  staticDirs: ['../src/assets/public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    'storybook-version'
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    // autodocs: 'tag',
    // defaultName: 'Documentation',
  },
  parameters: {
    version: {
      major: '4',
      minor: '2',
      patch: '0',
    }
  }
};

export default config;
