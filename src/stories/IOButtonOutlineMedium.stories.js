import '@material/web/button/outlined-button.js'
import IOButtonOutlineMedium from '@/components/IOButtonOutlineMedium.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Outlined/Medium',
  component: IOButtonOutlineMedium,
  argTypes: {

  },
};

export const Button = {
  render: () => ({
    components: { IOButtonOutlineMedium },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOButtonOutlineMedium>Click Me</IOButtonOutlineMedium><br><br><IOButtonOutlineMedium disabled>Click Me</IOButtonOutlineMedium>',
  }),
};
