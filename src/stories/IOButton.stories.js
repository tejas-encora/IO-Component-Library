import IOButton from '@/components/IOButton.vue';

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
  label: 'Small Button',
};
export const IconSmall = Template.bind({});
Small.args = {
  label: 'Icon Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'Medium',
  label: 'Medium Button',
};
export const IconMedium = Template.bind({});
Medium.args = {
  size: 'Medium',
  label: 'Icon Medium Button',
};
export const Large = Template.bind({});
Large.args = {
  size: 'Large',
  label: 'Large Button',
};
export const IconLarge = Template.bind({});
Large.args = {
  size: 'Large',
  label: 'Icon Large Button',
};