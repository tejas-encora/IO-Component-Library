/** @type { import('@storybook/vue3').Preview } */
import '@/assets/theme.css'
import '@fontsource/lato/400.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-pro/css/all.css'
import '@material/web/button/filled-button.js'

const preview = {
  parameters: {
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
