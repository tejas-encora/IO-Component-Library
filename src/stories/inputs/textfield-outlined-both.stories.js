import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlineBoth from '@/components/Inputs/IOTextFieldOutlineBoth.vue'

export default {
  title: 'UI/Atoms/Inputs/Text Fields/Outlined/With Icons/Both',
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
    components: { IOTextFieldOutlineBoth },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

