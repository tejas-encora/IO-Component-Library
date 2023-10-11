/** @type { import('@storybook/vue3').Preview } */
import '@/assets/theme.css'
import '@fontsource/lato/400.css'
import '@material/web/button/filled-button.js'
import { themes } from '@storybook/theming';

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
  },
};

export default preview;
