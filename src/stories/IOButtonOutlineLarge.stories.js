import '@material/web/button/outlined-button.js'
import IOButtonOutlineLarge from '@/components/IOButtonOutlineLarge.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Large',
  component: IOButtonOutlineLarge,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonOutlineLarge },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonOutlineLarge>Click Me</IOButtonOutlineLarge>',
  }),
};
