import '@material/web/button/outlined-button.js'
import IOIconButtonOutlineSmall from '@/components/IOIconButtonOutlineSmall.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Small/Plus Icon',
  component: IOIconButtonOutlineSmall,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOIconButtonOutlineSmall },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonOutlineSmall>Click Me!</IOIconButtonOutlineSmall>',
  }),
};
