import '@material/web/textfield/filled-text-field.js'
import IOTextAreaFilled from '@/components/Inputs/IOTextAreaFilled.vue'

export default {
  title: 'UI/Atoms/Inputs/Textarea/Filled',
  component: IOTextAreaFilled,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextAreaFilled },
    setup() {
      return { args };
    },
    template: `<IOTextAreaFilled rows="5" type="textarea" label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'The Label',
    'supporting-text': 'My supporting text',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      }
    },
    disabled: {
      control: 'boolean'
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextAreaFilled },
    setup() {
      return { args };
    },
    template: `<IOTextAreaFilled label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};
