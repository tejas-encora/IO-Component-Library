/** @type { import('@storybook/vue3').Preview } */
import '@/assets/theme.css'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fortawesome/fontawesome-pro'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-pro/css/all.css'
import { themes } from '@storybook/theming'
import { setup } from '@storybook/vue3';
import { registerPlugins } from '../src/plugins';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
});

const preview = {
  parameters: {
    docs: {
      theme: themes.light,
      layout: 'centered',
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export const decorators = [withVuetifyTheme];
export default preview;
