import '@material/web/button/outlined-button.js'
import IOButtonOutlineSmall from '@/components/IOButtonOutlineSmall.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Small',
  component: IOButtonOutlineSmall,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonOutlineSmall },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonOutlineSmall>Click Me</IOButtonOutlineSmall><br><br><IOButtonOutlineSmall disabled>Click Me</IOButtonOutlineSmall>',
  }),
};
