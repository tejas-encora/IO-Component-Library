import '@material/web/textfield/outlined-text-field.js'
import IOTextAreaOutline from '@/components/Inputs/IOTextAreaOutline.vue'

export default {
  title: 'UI/Atoms/Inputs/Textarea/Outlined',
  component: IOTextAreaOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextAreaOutline },
    setup() {
      return { args };
    },
    template: `<IOTextAreaOutline rows="5" type="textarea" label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
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
        type: 'text',
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
    template: `<IOTextAreaOutline label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};
