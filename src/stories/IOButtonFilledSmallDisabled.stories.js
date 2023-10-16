import '@material/web/button/filled-button.js'
import IOButtonFilledSmallDisabled from '@/components/IOButtonFilledSmallDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Small/Disabled',
  component: IOButtonFilledSmallDisabled,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonFilledSmallDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonFilledSmallDisabled @click="onClick">Click Me</IOButtonFilledSmallDisabled>',
  }),
};
