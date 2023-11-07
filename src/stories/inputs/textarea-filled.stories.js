import '@material/web/textfield/filled-text-field.js'
import IOTextArea from '@/components/Inputs/IOTextArea.vue'

const template = '<IOTextArea :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textarea/Filled',
  component: IOTextArea,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextArea },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
    rows: 3,
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
    template: template
  }),
};
