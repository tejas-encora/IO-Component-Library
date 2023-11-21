import '@material/web/textfield/outlined-text-field.js'
import IOPasswordOutline from '@/components/Inputs/IOPasswordOutline.vue'

const template = '<IOPasswordOutline :error=args.error :error-text=args.errorText :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />'

export default {
  title: 'UI/Atoms/Inputs/Password/Outlined',
  component: IOPasswordOutline,
  render: (args) => ({
    components: { IOPasswordOutline },
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
    components: { IOPasswordOutline },
    setup() {
      return { args };
    },
    template
  }),
};

