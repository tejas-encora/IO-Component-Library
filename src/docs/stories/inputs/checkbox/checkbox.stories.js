import '@material/web/checkbox/checkbox.js'
import IOCheckbox from '@/components/Checkbox/IOCheckbox.vue'

const template = `<IOCheckbox :error=args.error :disabled=args.disabled />`

export default {
  title: 'UI/Atoms/Inputs/Checkbox',
  component: IOCheckbox,
  render: (args) => ({
    components: { IOCheckbox },
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
    components: { IOCheckbox },
    setup() {
      return { args };
    },
    template
  }),
};
