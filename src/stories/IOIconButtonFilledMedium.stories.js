import '@material/web/button/filled-button.js'
import IOIconButtonFilledMedium from '@/components/IOIconButtonFilledMedium.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Medium/Plus Icon',
  component: IOIconButtonFilledMedium,
  argTypes: {

  },
};

export const Button  = {
  render: () => ({
    components: { IOIconButtonFilledMedium },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonFilledMedium>Click Me!</IOIconButtonFilledMedium><br><br><IOIconButtonFilledMedium disabled>Click Me!</IOIconButtonFilledMedium>',
  }),
};
