import '@material/web/button/filled-button.js'
import '@fortawesome/fontawesome-pro'
import '@fortawesome/fontawesome-svg-core'
import IOIconButtonFilledSmall from '@/components/IOIconButtonFilledSmall.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/Buttons/Filled/Small/Icon Buttons',
  component: IOIconButtonFilledSmall,
  argTypes: {

  },
};

export const ButtonWithIcon  = {
  render: () => ({
    components: { IOIconButtonFilledSmall },
    setup() {
      return {
        onClick: action('clicked'),
      };
    },
    template: '<md-filled-button class="small"><i class="fa-light fa-circle-plus" slot="icon"></i>Click Me!</md-filled-button>',
  }),
};
