import '@material/web/button/filled-button.js'
import  IOButton  from '@/components/IOButton.vue'

export default {
  title: 'UI/Buttons/Filled/Button',
  component: IOButton,
  argTypes: {

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IOButton },
  template: '<md-filled-button>Some Text</md-filled-button>',
});

export const Small = Template.bind({}); 
Small.args = {
  size: 'Small',

};
export const IconSmall = Template.bind({});
Small.args = {
  size: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'Medium',
};
export const IconMedium = Template.bind({});
Medium.args = {
  size: 'Medium',
};
export const Large = Template.bind({});
Large.args = {
  size: 'Large',
};
export const IconLarge = Template.bind({});
Large.args = {
  size: 'Large',
};