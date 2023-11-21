import '@material/web/textfield/filled-text-field.js'
import IOPassword from '@/components/Inputs/IOPassword.vue'

const template = '<IOPassword :error=args.error :error-text=args.errorText :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />'

export default {
  title: 'UI/Atoms/Inputs/Password/Filled',
  component: IOPassword,
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
    supportingText: 'Supporting text',
    error: false,
    errorText: 'Oops, this thing needs fixed',
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
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Error state',
    },
    errorText: {
      control: {
        type: 'text',
      },
      description: 'Error text',
    },
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

