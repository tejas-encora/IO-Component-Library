import '@material/web/button/outlined-button.js'
import IOButtonOutlineSmallDisabled from '@/components/IOButtonOutlineSmallDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Small/Disabled',
  component: IOButtonOutlineSmallDisabled,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonOutlineSmallDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonOutlineSmallDisabled>Click Me</IOButtonOutlineSmallDisabled>',
  }),
};
