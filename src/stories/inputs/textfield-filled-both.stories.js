import '@material/web/textfield/filled-text-field.js'
import IOTextFieldBoth from '@/components/Inputs/IOTextFieldBoth.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled/With Icons/Both',
  component: IOTextFieldBoth,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldBoth },
    setup() {
      return { args };
    },
    template: `<IOTextFieldBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'The Label',
    icon: 'magnifying-glass',
    'supporting-text': 'My supporting text'
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
    components: { IOTextFieldBoth },
    setup() {
      return { args };
    },
    template: `<IOTextFieldBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

