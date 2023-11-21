import '@material/web/checkbox/checkbox.js'
import IOCheckbox from '@/components/Checkbox/IOCheckbox.vue'

const template = `<IOCheckbox :class=args.class :disabled=args.disabled />`

export default {
  title: 'UI/Atoms/Inputs/Checkbox',
  component: IOCheckbox,
  render: (args) => ({
    components: { IOCheckbox },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    class: ''
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    class: {
      control: {
        type: 'select',
      },
      options: ['none', 'error']
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { IOCheckbox },
    setup() {
      return { args };
    },
    template: template
  }),
};
