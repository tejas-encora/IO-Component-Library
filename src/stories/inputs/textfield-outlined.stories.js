
import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue'

export default {
  title: 'UI/Atoms/Inputs/Text Fields/Outlined',
  component: IOTextFieldOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldOutline },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutline label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'The Label',
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
    'supporting-text': 'My supporting text'
  },
  argTypes: {
    disabled: {
      defaultValue: false
    },
    label: {
      control: {
        type: 'text',
      },
      description: 'The label of the input',
      defaultValue: 'The Label'
    },
    icon: {
      control: {
        type: 'text'
      },
      description: 'Starting Icon',
      defaultValue: 'magnifying-glass'
    },
    iconTrailing: {
      control: {
        type: 'text'
      },
      description: 'Ending Icon',
      defaultValue: 'circle-x'
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldOutline },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutline label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};