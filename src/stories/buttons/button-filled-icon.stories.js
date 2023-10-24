import '@material/web/button/filled-button.js'
import IOIconButtonFilled from '@/components/Buttons/IOIconButtonFilled.vue'

export default {
  title: 'UI/Atoms/Buttons/Filled/With Icon',
  component: IOIconButtonFilled,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOIconButtonFilled },
    setup() {
      return { args };
    },
    template: `<IOIconButtonFilled v-bind="args">{{args.label}}</IOIconButtonFilled>`
  }),
  args: {
    disabled: false,
    label: 'The Label',
    class: 'medium',
    icon: 'circle-plus'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Button label',
    },
    class: {
      control: {
        type: 'select',
      },
      description: 'Button size',
      options: ['small', 'medium', 'large'],
    },
    icon: {
      control: {
        type: 'text'
      },
      description: 'FontAwesome icon name, i.e. circle-plus. No \'fa-\' suffix is needed',
    },
    disabled: 'boolean'
  },
};

export const WithIcon = {
  render: (args) => ({
    components: { IOIconButtonFilled },
    setup() {
      return { args };
    },
    template: '<IOIconButtonFilled icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonFilled>'
  }),
};

