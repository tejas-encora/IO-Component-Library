import '@material/web/textfield/filled-text-field.js'
import IOTextFieldTrailing from '@/components/Inputs/IOTextFieldTrailing.vue'
import IOTextFieldPassword from '@/components/Inputs/IOTextFieldPassword.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled/With Icons/Trailing',
  component: IOTextFieldTrailing,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    props: Object.keys(argTypes),
    template: `<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    error: false,
    label: 'The Label',
    icon: 'circle-x',
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
    disabled: 'boolean',
    error: 'boolean',
    handleToggle: { action: 'toggled' }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldTrailing },
    setup() {
      return { args };
    },
    template: `<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args" @toggled="handleToggle" v-bind="$props"/>`
  }),
};

export const Password = {
  args: {
    icon: 'magnifying-glass'
  },
  argTypes: {
    handleToggle: { action: 'handleToggle' }
  },
  render: (args, {argTypes}) => ({
    components: { IOTextFieldPassword },
    setup() {
      return { args };
    },
    template: `<IOTextFieldPassword label="Password" type="password" v-bind="args" @toggled="handleToggle"/>`
  }),
};
