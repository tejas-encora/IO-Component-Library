import '@material/web/button/filled-button.js'
import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'

const template = '<IOButtonFilled :class=args.class :disabled=args.disabled :status=args.status :size=args.size :icon=args.icon :leadingIcon=args.leadingIcon>{{args.label}}</IOButtonFilled>'

export default {
    title: 'UI/Atoms/Buttons/Filled',
    component: IOButtonFilled,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template
    }),
    args: {
        disabled: false,
        label: 'Label',
        size: 'medium',
        icon: 'circle-plus',
        leadingIcon: false,
        status: 'none',
        class: 'none',
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
            description: 'Button label',
        },
        size: {
            control: {
                type: 'select',
            },
            description: 'Button size',
            options: ['small', 'medium', 'large'],
        },
        icon: {
            // if: { arg: 'leadingIcon' },
            control: {
                type: 'text'
            },
            description: 'FontAwesome icon name, i.e. circle-plus. No \'fa-\' suffix is needed',
        },
        leadingIcon: {
            control: {
                type: 'boolean',
            },
            description: 'Add leading icon',
        },
        status: {
            //  if: { arg: 'class', eq: 'primary' },
            control: {
                type: 'select',
            },
            options: ['none', 'success', 'error', 'warning', 'info'],
        },
        class: {
            control: {
                type: 'select',
            },
            options: ['none', 'secondary'],
        },
    },
};

export const Button = {
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template
    }),
};