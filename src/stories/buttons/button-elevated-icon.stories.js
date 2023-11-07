import '@material/web/button/elevated-button.js'
import IOIconButtonElevated from '@/components/Buttons/IOIconButtonElevated.vue'

const template = '<IOIconButtonElevated :class=args.class :disabled=args.disabled :icon=args.icon>{{args.label}}</IOIconButtonElevated>'

export default {
  title: 'UI/Atoms/Buttons/Elevated/With Icon',
  component: IOIconButtonElevated,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOIconButtonElevated },       
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
    components: { IOIconButtonElevated },
    setup() {
      return { args };
    },
    template: template
  }),
};