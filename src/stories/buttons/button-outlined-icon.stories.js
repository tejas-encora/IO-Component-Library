import '@material/web/button/filled-button.js'
import IOIconButtonOutline from '@/components/Buttons/IOIconButtonOutline.vue'

export default {
  title: 'UI/Atoms/Buttons/Outlined/With Icon',
  component: IOIconButtonOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOIconButtonOutline },
    setup() {
      return { args };
    },
    template: `<IOIconButtonOutline label={{args.label}} v-bind="args"/>`
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
    components: { IOIconButtonOutline },
    setup() {
      return { args };
    },
    template: '<IOIconButtonOutline icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonOutline>'
  }),
};

