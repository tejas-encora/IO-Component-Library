import '@material/web/button/filled-button.js'
import IOIconButtonFilledSmallDisabled from '@/components/IOIconButtonFilledSmallDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Small/Plus Icon/Disabled',
  component: IOIconButtonFilledSmallDisabled,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOIconButtonFilledSmallDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonFilledSmallDisabled>Click Me!</IOIconButtonFilledSmallDisabled>',
  }),
};
