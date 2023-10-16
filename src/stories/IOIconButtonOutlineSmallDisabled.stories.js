import '@material/web/button/outlined-button.js'
import IOIconButtonOutlineSmallDisabled from '@/components/IOIconButtonOutlineSmallDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Small/Plus Icon/Disabled',
  component: IOIconButtonOutlineSmallDisabled,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOIconButtonOutlineSmallDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonOutlineSmallDisabled>Click Me!</IOIconButtonOutlineSmallDisabled>',
  }),
};
