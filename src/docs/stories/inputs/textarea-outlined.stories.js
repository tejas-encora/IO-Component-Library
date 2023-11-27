import '@material/web/textfield/outlined-text-field.js'
import IOTextAreaOutline from '@/components/Inputs/IOTextAreaOutline.vue'

const template = '<IOTextAreaOutline :error=args.error :error-text=args.errorText :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textarea/Outlined',
  component: IOTextAreaOutline,
  render: (args) => ({
    components: { IOTextAreaOutline },
    setup() {
      return { args };
    },
    template
  }),
  args: {
    disabled: false,
    label: 'Label',
    rows: 3,
    error: false,
    errorText: 'Oops, this thing needs fixed',
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
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Error state',
    },
    errorText: {
      control: {
        type: 'text',
      },
      description: 'Error text',
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextAreaOutline },
    setup() {
      return { args };
    },
    template
  }),
};
