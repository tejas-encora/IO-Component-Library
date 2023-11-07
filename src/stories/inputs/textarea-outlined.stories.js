import '@material/web/textfield/outlined-text-field.js'
import IOTextAreaOutline from '@/components/Inputs/IOTextAreaOutline.vue'

const template = '<IOTextAreaOutline :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textarea/Outlined',
  component: IOTextAreaOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextAreaOutline },
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
    components: { IOTextAreaOutline },
    setup() {
      return { args };
    },
    template: template
  }),
};
