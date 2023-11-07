import '@material/web/button/filled-button.js'
import IOIconButtonFilled from '@/components/Buttons/IOIconButtonFilled.vue'

const template = '<IOIconButtonFilled :class=args.class :disabled=args.disabled :icon=args.icon>{{args.label}}</IOIconButtonFilled>'

export default {
  title: 'UI/Atoms/Buttons/Filled/With Icon',
  component: IOIconButtonFilled,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOIconButtonFilled },
    setup() {
      return { args };
    },
    template: template
  }),
  args: {
    disabled: false,
    label: 'Label',
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

export const Default = {
  render: (args) => ({
    components: { IOIconButtonFilled },
    setup() {
      return { args };
    },
    template: template
  }),
};