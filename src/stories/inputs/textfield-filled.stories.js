import '@material/web/textfield/filled-text-field.js'
import IOTextField from '@/components/Inputs/IOTextField.vue'
import IOTextFieldLeading from '@/components/Inputs/IOTextFieldLeading.vue'
import IOTextFieldTrailing from '@/components/Inputs/IOTextFieldTrailing.vue'
import IOTextFieldBoth from '@/components/Inputs/IOTextFieldBoth.vue'
import IOTextFieldPassword from '@/components/Inputs/IOTextFieldPassword.vue'


export default {
  title: 'UI/Atoms/Inputs/Text Fields/Filled',
  component: IOTextField,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: `<IOTextField label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'The Label',
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
    'supporting-text': 'My supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    disabled: 'boolean'
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: `<IOTextField label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};
