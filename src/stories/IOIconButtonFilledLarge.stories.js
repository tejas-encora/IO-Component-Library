import '@material/web/button/filled-button.js'
import IOIconButtonFilledLarge from '@/components/IOIconButtonFilledLarge.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Large/Plus Icon',
  component: IOIconButtonFilledLarge,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOIconButtonFilledLarge },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonFilledLarge>Click Me!</IOIconButtonFilledLarge><br><br><IOIconButtonFilledLarge disabled>Click Me!</IOIconButtonFilledLarge>',
  }),
};
