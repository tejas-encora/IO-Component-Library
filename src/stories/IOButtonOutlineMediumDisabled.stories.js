import '@material/web/button/outlined-button.js'
import IOButtonOutlineMediumDisabled from '@/components/IOButtonOutlineMediumDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Medium/Disabled',
  component: IOButtonOutlineMediumDisabled,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonOutlineMediumDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonOutlineMediumDisabled>Click Me</IOButtonOutlineMediumDisabled>',
  }),
};
