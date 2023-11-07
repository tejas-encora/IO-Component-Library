import '@material/web/textfield/filled-text-field.js'
import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlinePassword from '@/components/Inputs/IOTextFieldOutlinePassword.vue'
import IOTextFieldPassword from '@/components/Inputs/IOTextFieldPassword.vue'

const template = '<IOTextFieldPassword :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Password',
  component: IOTextFieldPassword,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldPassword },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
    supportingText: 'Supporting text'
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
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldPassword },
    setup() {
      return { args };
    },
    template: template
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
