import '@material/web/textfield/filled-text-field.js'
import IOTextFieldTrailing from '@/components/Inputs/IOTextFieldTrailing.vue'

const template = '<IOTextFieldTrailing :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled/With Icons/Trailing',
  component: IOTextFieldTrailing,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldIOTextFieldTrailingLeading },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
    icon: 'magnifying-glass',
    supportingText: 'Supporting text'
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
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldTrailing },
    setup() {
      return { args };
    },
    template: template
  }),
};

