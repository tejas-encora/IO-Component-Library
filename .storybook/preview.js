/** @type { import('@storybook/vue3').Preview } */
import '@/assets/theme.css'
import '@fontsource/lato/400.css'
import '@fortawesome/fontawesome-pro'
import '@fortawesome/fontawesome-svg-core'

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
