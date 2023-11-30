import '@material/web/radio/radio.js'
import IORadioButton from '@/components/radio/IORadioButton.vue'

const template = `<IORadioButton :error=args.error :disabled=args.disabled />`

export default {
  title: 'UI/Atoms/Inputs/Radio Button',
  component: IORadioButton,
  render: (args) => ({
    components: { IORadioButton },
    setup() {
      return { args };
    },
    template
  }),
  args: {
    disabled: false,
    error: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: {
        type: 'boolean',
      },
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IORadioButton },
    setup() {
      return { args };
    },
    template
  }),
};
