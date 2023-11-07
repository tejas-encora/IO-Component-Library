import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlineTrailing from '@/components/Inputs/IOTextFieldOutlineTrailing.vue'

const template = '<IOTextFieldOutlineTrailing :icon=args.icon :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Outlined/With Icons/Trailing',
  component: IOTextFieldOutlineTrailing,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
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
    components: { IOTextFieldOutlineTrailing },
    setup() {
      return { args };
    },
    template: template
  }),
};
