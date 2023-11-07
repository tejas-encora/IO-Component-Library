import '@material/web/textfield/filled-text-field.js'
import IOTextFieldBoth from '@/components/Inputs/IOTextFieldBoth.vue'

const template = '<IOTextFieldBoth :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled/With Icons/Both',
  component: IOTextFieldBoth,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldBoth },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
    supportingText: 'Supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Field label',
    },
    icon: {
      control: {
        type: 'text'
      },
      iconTrailing: {
        control: {
          type: 'text'
        }
      },
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldBoth },
    setup() {
      return { args };
    },
    template: template
  }),
};

