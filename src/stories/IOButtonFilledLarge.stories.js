import '@material/web/button/filled-button.js'
import IOButtonFilledLarge from '@/components/IOButtonFilledLarge.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Large/Button',
  component: IOButtonFilledLarge,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonFilledLarge },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonFilledLarge @click="onClick">Click Me</IOButtonFilledLarge>',
  }),
};
