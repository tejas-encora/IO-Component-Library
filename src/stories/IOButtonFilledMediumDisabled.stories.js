import '@material/web/button/filled-button.js'
import IOButtonFilledMedium from '@/components/IOButtonFilledMediumDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Medium/Disabled',
  component: IOButtonFilledMediumDisabled,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonFilledMediumDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonFilledMediumDisabled @click="onClick">Click Me</IOButtonFilledMediumDisabled>',
  }),
};
