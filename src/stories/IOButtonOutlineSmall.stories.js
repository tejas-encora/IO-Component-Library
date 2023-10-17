import '@material/web/button/outlined-button.js'
import IOButtonOutlineSmall from '@/components/IOButtonOutlineSmall.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Small/Button',
  component: IOButtonOutlineSmall,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonOutlineSmall },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonOutlineSmall @click="onClick">Click Me</IOButtonOutlineSmall>',
  }),
};
