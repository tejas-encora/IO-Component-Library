
import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Outlined',
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
    'supporting-text': 'My supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'The label for the input',
      defaultValue: 'The Label'
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