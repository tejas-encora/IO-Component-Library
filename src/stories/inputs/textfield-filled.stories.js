import '@material/web/textfield/filled-text-field.js'
import IOTextField from '@/components/Inputs/IOTextField.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled',
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
    'supporting-text': 'My supporting text',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      }
    },
    disabled: {
      control: 'boolean'
    }
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
