import '@material/web/textfield/filled-text-field.js'
import IOTextFieldTrailing from '@/components/Inputs/IOTextFieldTrailing.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled/With Icons/Trailing',
  component: IOTextFieldTrailing,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldIOTextFieldTrailingLeading },
    setup() {
      return { args };
    },
    template: `<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
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
    components: { IOTextFieldTrailing },
    setup() {
      return { args };
    },
    template: `<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

