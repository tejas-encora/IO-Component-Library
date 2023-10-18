import '@material/web/textfield/filled-text-field.js'
import IOTextField from '@/components/Inputs/IOTextField.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Inputs/Text/Filled',
  component: IOTextField,
  tags: ['autodocs'],
  argTypes: {

  },
};

export const TextField = {
  render: () => ({
    components: { IOTextField },
    template: '<IOTextField label="Label">Click Me</IOTextField>'
  }),
};
