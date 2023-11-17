import '@material/web/textfield/outlined-text-field.js'
import IOPasswordOutline from '@/components/Inputs/IOPasswordOutline.vue'

const template = '<IOPasswordOutline :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />'

export default {
  title: 'UI/Atoms/Inputs/Password/Outlined',
  component: IOPasswordOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOPasswordOutline },
    setup() {
      return { args };
    },
    template
  }),
  args: {
    disabled: false,
    label: 'Label',
    supportingText: 'Supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Field label',
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
    components: { IOPasswordOutline },
    setup() {
      return { args };
    },
    template
  }),
};
