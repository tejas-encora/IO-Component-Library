import '@material/web/textfield/filled-text-field.js'
import IOPassword from '@/components/Inputs/IOPassword.vue'

const template = '<IOPassword :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />'

export default {
  title: 'UI/Atoms/Inputs/Password/Filled',
  component: IOPassword,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOPassword },
    setup() {
      return { args };
    },
    template
  }),
  args: {
    disabled: false,
    label: 'Label',
    supportingText: 'Supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Field label',
    },   
    supportingText: {
      control: {
        type: 'text',
      }
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOPassword },
    setup() {
      return { args };
    },
    template
  }),
};

