import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlineLeading from '@/components/Inputs/IOTextFieldOutlineLeading.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Outlined/With Icons/Leading',
  component: IOTextFieldOutlineLeading,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
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

export const Leading = {
  render: (args) => ({
    components: { IOTextFieldOutlineLeading },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

