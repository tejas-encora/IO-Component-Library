import '@material/web/textfield/filled-text-field.js'
import IOTextFieldLeading from '@/components/Inputs/IOTextFieldLeading.vue'

const template = '<IOTextFieldLeading :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />'

export default {
  title: 'UI/Atoms/Inputs/Textfield/Filled/With Icons/Leading',
  component: IOTextFieldLeading,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldLeading },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
    icon: 'magnifying-glass',
    supportingText: 'Supporting text'
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
    }
  },
};

export const Leading = {
  render: (args) => ({
    components: { IOTextFieldLeading },
    setup() {
      return { args };
    },
    template: template
  }),
};

