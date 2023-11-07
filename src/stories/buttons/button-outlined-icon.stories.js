import '@material/web/button/outlined-button.js'
import IOIconButtonOutline from '@/components/Buttons/IOIconButtonOutline.vue'

const template = '<IOIconButtonOutline :icon=args.icon :class=args.class :disabled=args.disabled>{{args.label}}</IOIconButtonOutline>';

export default {
  title: 'UI/Atoms/Buttons/Outlined/With Icon',
  component: IOIconButtonOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOIconButtonOutline },
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

  },
};

export const Default = {
  render: (args) => ({
    components: { IOIconButtonOutline },
    setup() {
      return { args };
    },
    template: template
  }),
};

