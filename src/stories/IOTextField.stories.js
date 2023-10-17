import '@material/web/textfield/filled-text-field.js'
import IOTextField from '@/components/IOTextField.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Inputs/Text/Filled',
  component: IOTextField,
  argTypes: {

  },
};

export const TextField = {
  render: () => ({
    components: { IOTextField },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOTextField>Click Me</IOButtonFilledLarge>',
  }),
};
