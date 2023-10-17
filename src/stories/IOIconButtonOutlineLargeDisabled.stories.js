import '@material/web/button/outlined-button.js'
import IOButtonOutlineLargeDisabled from '@/components/IOButtonOutlineLargeDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Large/Disabled',
  component: IOButtonOutlineLargeDisabled,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOButtonOutlineLargeDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonOutlineLargeDisabled>Click Me!</IOButtonOutlineLargeDisabled>',
  }),
};
