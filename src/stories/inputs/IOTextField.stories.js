import '@material/web/textfield/filled-text-field.js'
import '@material/web/textfield/outlined-text-field.js'
import IOTextField from '@/components/Inputs/IOTextField.vue'
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue'

export default {
  title: 'UI/Atoms/Inputs/Text',
  component: IOTextField,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: '<IOTextField class="large" type="text"/>',
  }),
  args: {
    disabled: false,
    label: 'The Label',
    'supporting-text' : 'My supporting text' 
  },
  argTypes: {
    class: {
      control: {
        type: 'select',
      },
      options: ['medium', 'large'],
    },
    supportingtext: {
      control: {
        type: 'text',
      }
    },
    label: {
      control: {
        type: 'text',
      }
    },
    disabled: 'boolean'
  },
};

export const FilledTextField = {
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: `<IOTextField label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

export const OutlineTextField = {
  render: (args) => ({
    components: { IOTextFieldOutline },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutline label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

