import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Inputs/Text/Outlined',
  component: IOTextFieldOutline,
  argTypes: {

  },
};

export const TextField = {
  render: () => ({
    components: { IOTextFieldOutline },
    template: '<IOTextFieldOutline>Click Me</IOTextFieldOutline>'
  }),
};
