
import '@material/web/textfield/outlined-text-field.js'
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue'
import IOTextFieldOutlineLeading from '@/components/Inputs/IOTextFieldOutlineLeading.vue'
import IOTextFieldOutlineTrailing from '@/components/Inputs/IOTextFieldOutlineTrailing.vue'
import IOTextFieldOutlineBoth from '@/components/Inputs/IOTextFieldOutlineBoth.vue'

export default {
  title: 'UI/Atoms/Inputs/Text Fields/Outlined',
  component: IOTextFieldOutline,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextFieldOutline },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutline label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'The Label',
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
    'supporting-text': 'My supporting text'
  },
  argTypes: {
    disabled: {
      defaultValue: false
    },
    label: {
      control: {
        type: 'text',
      },
      description: 'The label of the input',
      defaultValue: 'The Label'
    },
    icon: {
      control: {
        type: 'text'
      },
      description: 'Starting Icon',
      defaultValue: 'magnifying-glass'
    },
    iconTrailing: {
      control: {
        type: 'text'
      },
      description: 'Ending Icon',
      defaultValue: 'circle-x'
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  },
};

export const Outlined = {
  render: (args) => ({
    components: { IOTextFieldOutline },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutline label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

export const LeadingIcon = {
  args: {
    icon: 'magnifying-glass'
  },
  render: (args) => ({
    components: { IOTextFieldOutlineLeading },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};
export const TrailingIcon = {
  args: {
    icon: 'circle-x'
  },
  render: (args) => ({
    components: { IOTextFieldOutlineTrailing },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

export const BothIcons = {
  args: {
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
  },
  render: (args) => ({
    components: { IOTextFieldOutlineBoth },
    setup() {
      return { args };
    },
    template: `<IOTextFieldOutlineBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};