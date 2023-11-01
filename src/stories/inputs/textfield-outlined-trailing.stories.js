import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlineTrailing from '@/components/Inputs/IOTextFieldOutlineTrailing.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Outlined/With Icons/Trailing',
  component: IOTextFieldOutlineTrailing,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'Label',
    icon: 'magnifying-glass',
    'supporting-text': 'Supporting text'
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
    components: { IOTextFieldOutlineTrailing },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};
