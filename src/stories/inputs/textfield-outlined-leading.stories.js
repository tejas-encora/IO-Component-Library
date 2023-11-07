import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutlineLeading from '@/components/Inputs/IOTextFieldOutlineLeading.vue'

const template = '<IOTextFieldOutlineLeading :icon=args.icon :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />';

export default {
  title: 'UI/Atoms/Inputs/Textfield/Outlined/With Icons/Leading',
  component: IOTextFieldOutlineLeading,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldOutlineLeading },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
    icon: 'magnifying-glass',
    supportingText: 'Supporting text',
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
  },
};

export const Leading = {
  render: (args) => ({
    components: { IOTextFieldOutlineLeading },
    setup() {
      return { args };
    },
    template: template
  }),
};

