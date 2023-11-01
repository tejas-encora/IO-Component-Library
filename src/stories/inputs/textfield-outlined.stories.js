
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
    label: 'Label',
    icon: 'magnifying-glass',
    'supporting-text': 'Supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Field label',
      defaultValue: 'Label'
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