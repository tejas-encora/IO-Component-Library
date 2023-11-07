import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue'

const template = '<IOTextFieldOutline :label=args.label :supporting-text=args.supportingText :value=args.value :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Outlined',
  component: IOTextFieldOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldOutline },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
    supportingText: 'Supporting text',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      }
    },
    supportingText: {
      control: {
        type: 'text',
      }
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOTextFieldOutline },
    setup() {
      return { args };
    },
    template: template
  }),
};
