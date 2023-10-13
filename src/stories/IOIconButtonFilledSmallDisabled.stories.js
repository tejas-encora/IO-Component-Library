import '@material/web/button/filled-button.js'
import IOIconButtonFilledSmallDisabled from '@/components/IOIconButtonFilledSmallDisabled.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Atoms/Buttons/Filled/Small/Button IconDisabled',
  component: IOIconButtonFilledSmallDisabled,
  argTypes: {

  },
};

export const ButtonWithIconDisabled  = {
  render: () => ({
    components: { IOIconButtonFilledSmallDisabled },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<IOIconButtonFilledSmallDisabled class="small">Click Me!</IOIconButtonFilledSmallDisabled>',
  }),
};
