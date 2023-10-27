import '@material/web/textfield/filled-text-field.js'
import IOTextFieldLeading from '@/components/Inputs/IOTextFieldLeading.vue'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled/With Icons/Leading',
  component: IOTextFieldLeading,
  tags: ['autodocs'],
  render: (args) => ({

    components: { IOTextFieldLeading },
    setup() {
      return { args };
    },
    template: `<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
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
    components: { IOTextFieldLeading },
    setup() {
      return { args };
    },
    template: `<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

