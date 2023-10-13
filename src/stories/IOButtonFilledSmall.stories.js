import '@material/web/button/filled-button.js'
import IOButtonFilledSmall from '@/components/IOButtonFilledSmall.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Buttons/Filled/Small/Button',
  component: IOButtonFilledSmall,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonFilledSmall },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonFilledSmall @click="onClick">Click Me</IOButtonFilledSmall>',
  }),
};
