import '@material/web/textfield/filled-text-field.js'
import IOTextField from '@/components/Inputs/IOTextField.vue'

const template = '<IOTextField :clear=args.clear :error=args.error :error-text=args.errorText :label=args.label :supporting-text=args.supportingText :value=args.value :disabled=args.disabled :leadingIcon=args.leadingIcon :trailingIcon=args.trailingIcon :iconStart=args.iconStart :iconEnd=args.iconEnd />'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled',
  component: IOTextField,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template
  }),
  args: {
    disabled: false,
    label: 'Label',
    supportingText: 'Supporting text',
    leadingIcon: false,
    trailingIcon: false,
    iconStart: 'magnifying-glass',
    iconEnd: '',
    error: false,
    errorText: 'Oops, this thing needs fixed',
    clear: true,
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      }
    },
    supportingText: {
      control: {
        type: 'text',
      }
    },
    leadingIcon: {
      control: {
        type: 'boolean',
      },
      description: 'Add leading icon',
    },
    trailingIcon: {
      control: {
        type: 'boolean',
      },
      description: 'Add trailing icon',
    },
    iconStart: {
      // if: { arg: 'leadingIcon' },
      control: {
        type: 'text'
      },
      description: 'Leading icon. FontAwesome icon name, i.e. circle-plus. No \'fa-\' suffix is needed',
    },
    iconEnd: {
      // if: { arg: 'leadingIcon' },
      control: {
        type: 'text'
      },
      description: 'Trailing icon. FontAwesome icon name, i.e. circle-plus. No \'fa-\' suffix is needed',
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Apply error state',
    },
    errorText: {
      control: {
        type: 'text',
      },
      description: 'Custom error supporting text',
    },
    clear: {
      clear: {
        type: 'boolean',
      },
      description: 'Add delete icon that clears the value',
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template
  }),
};
