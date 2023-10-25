import '@material/web/button/filled-tonal-button.js'
import IOIconButtonTonal from '@/components/Buttons/IOIconButtonTonal.vue'

export default {
  title: 'UI/Atoms/Buttons/Tonal/With Icon',
  component: IOIconButtonTonal,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOIconButtonTonal },
    setup() {
      return { args };
    },
    template: `<IOIconButtonTonal v-bind="args">{{args.label}}</IOIconButtonElevated>`
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
    components: { IOIconButtonTonal },
    setup() {
      return { args };
    },
    template: '<IOIconButtonTonal icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonElevated>'
  }),
};

