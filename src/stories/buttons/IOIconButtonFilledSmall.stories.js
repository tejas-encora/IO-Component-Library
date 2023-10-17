import '@material/web/button/filled-button.js'
import IOIconButtonFilledSmall from '@/components/buttons/IOIconButtonFilledSmall.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Small/Plus Icon',
  component: IOIconButtonFilledSmall,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOIconButtonFilledSmall },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonFilledSmall @click="onClick">Click Me!</IOIconButtonFilledSmall><br><br><IOIconButtonFilledSmall disabled>Click Me!</IOIconButtonFilledSmall>',
  }),
};
