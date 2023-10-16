import '@material/web/button/filled-button.js'
import IOButtonFilledLargeDisabled from '@/components/IOButtonFilledLargeDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Large/Disabled',
  component: IOButtonFilledLargeDisabled,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonFilledLargeDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonFilledLargeDisabled @click="onClick">Click Me</IOButtonFilledLargeDisabled>',
  }),
};
