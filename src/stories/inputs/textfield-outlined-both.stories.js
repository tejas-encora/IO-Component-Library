import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlineBoth from '@/components/Inputs/IOTextFieldOutlineBoth.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Outlined/With Icons/Both',
  component: IOTextFieldOutlineBoth,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldOutlineBoth },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'Label',
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
    'supporting-text': 'Supporting text'
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
    },
    disabled: 'boolean'
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldOutlineBoth },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

