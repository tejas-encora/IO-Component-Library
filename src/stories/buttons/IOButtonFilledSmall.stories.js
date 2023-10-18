import '@material/web/button/filled-button.js'
import IOButtonFilledSmall from '@/components/buttons/IOButtonFilledSmall.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Small',
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
    template: '<IOButtonFilledSmall @click="onClick">Click Me</IOButtonFilledSmall><br><br><IOButtonFilledSmall disabled>Click Me</IOButtonFilledSmall>',
  }),
};