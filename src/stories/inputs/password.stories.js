import '@material/web/textfield/filled-text-field.js'
import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlinePassword from '@/components/Inputs/IOTextFieldOutlinePassword.vue'
import IOTextFieldPassword from '@/components/Inputs/IOTextFieldPassword.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Password',
  component: IOTextFieldPassword,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldPassword },
    setup() {
      return { args };
    },
    template: `<IOTextFieldPassword label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'Label',
    'supporting-text': 'Supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Field label',
    },        
    disabled: 'boolean'
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldPassword },
    setup() {
      return { args };
    },
    template: `<IOTextFieldPassword label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

export const Outlined = {
  render: (args) => ({
    components: { IOTextFieldOutlinePassword },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlinePassword label="Password" v-bind="args"/>`
  }),
};