/** @type { import('@storybook/vue3').Preview } */
import '@/assets/theme.css'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fortawesome/fontawesome-pro'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-pro/css/all.css'
import { themes } from '@storybook/theming'

import { setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";

setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
});

const preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};
export default preview;
export const decorators = [withVuetifyTheme];