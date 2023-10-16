import '@material/web/button/filled-button.js'
import IOIconButtonFilledMediumDisabled from '@/components/IOIconButtonFilledMediumDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Medium/Plus Icon/Disabled',
  component: IOIconButtonFilledMediumDisabled,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOIconButtonFilledMediumDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonFilledMediumDisabled>Click Me!</IOIconButtonFilledMediumDisabled>',
  }),
};
