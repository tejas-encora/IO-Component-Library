import '@material/web/textfield/filled-text-field.js'
import IOTextArea from '@/components/Inputs/IOTextArea.vue'

export default {
  title: 'UI/Atoms/Inputs/Textarea/Filled',
  component: IOTextArea,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextArea },
    setup() {
      return { args };
    },
    template: `<IOTextArea rows="5" type="textarea" label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'Label',
    rows: 3,
    'supporting-text': 'Supporting text',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Field label'
    },
    rows: {
      control: {
        type: 'number',
      },
      description: 'Number of rows'
    },
    disabled: {
      control: 'boolean'
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextArea },
    setup() {
      return { args };
    },
    template: `<IOTextArea label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};
