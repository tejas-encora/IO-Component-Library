import '@material/web/textfield/filled-text-field.js'
import '@material/web/textfield/outlined-text-field.js'
import IOTextField from '@/components/Inputs/IOTextField.vue'
import IOTextFieldLeading from '@/components/Inputs/IOTextFieldLeading.vue'
import IOTextFieldTrailing from '@/components/Inputs/IOTextFieldTrailing.vue'
import IOTextFieldBoth from '@/components/Inputs/IOTextFieldBoth.vue'
import IOTextFieldOutline from '@/components/Inputs/IOTextFieldOutline.vue'
import IOTextFieldOutlineLeading from '@/components/Inputs/IOTextFieldOutlineLeading.vue'
import IOTextFieldOutlineTrailing from '@/components/Inputs/IOTextFieldOutlineTrailing.vue'
import IOTextFieldOutlineBoth from '@/components/Inputs/IOTextFieldOutlineBoth.vue'

export default {
  title: 'UI/Atoms/Inputs/Text Fields',
  component: IOTextField,
  tags: ['autodocs'],
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: `<IOTextField label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
  args: {
    disabled: false,
    label: 'The Label',
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
    'supporting-text': 'My supporting text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    disabled: 'boolean'
  },
};

export const Filled = {
  render: (args) => ({
    components: { IOTextField },
    setup() {
      return { args };
    },
    template: `<IOTextField label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};
export const FilledLeadingIcon = {
  args: {
    icon: 'magnifying-glass'
  },
  render: (args) => ({
    components: { IOTextFieldLeading },
    setup() {
      return { args };
    },
    template: `<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

export const FilledTrailingIcon = {
  args: {
    icon: 'circle-x'
  },
  render: (args) => ({
    components: { IOTextFieldTrailing },
    setup() {
      return { args };
    },
    template: `<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
};

export const FilledBothIcons = {
  args: {
    icon: 'magnifying-glass',
    iconTrailing: 'circle-x',
  },
  render: (args) => ({
    components: { IOTextFieldBoth },
    setup() {
      return { args };
    },
    template: `<IOTextFieldBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>`
  }),
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

export const OutlinedLeadingIcon = {
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
export const OutlinedTrailingIcon = {
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

export const OutlinedBothIcons = {
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