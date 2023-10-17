import '@material/web/button/filled-button.js'
import IOButtonFilledMedium from '@/components/IOButtonFilledMedium.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Medium',
  component: IOButtonFilledMedium,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonFilledMedium },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonFilledMedium @click="onClick">Click Me</IOButtonFilledMedium>',
  }),
};
