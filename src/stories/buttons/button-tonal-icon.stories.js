import '@material/web/button/filled-tonal-button.js'
import IOIconButtonTonal from '@/components/Buttons/IOIconButtonTonal.vue'

const template = '<IOIconButtonTonal :class=args.class :disabled=args.disabled :icon=args.icon>{{args.label}}</IOIconButtonTonal>'

export default {
  title: 'UI/Atoms/Buttons/Tonal/With Icon',
  component: IOIconButtonTonal,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOIconButtonTonal },
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
    components: { IOIconButtonTonal },
    setup() {
      return { args };
    },
    template: template
  }),
};