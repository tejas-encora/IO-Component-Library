import '@material/web/button/text-button.js'
import IOButtonText from '@/components/Buttons/IOButtonText.vue'

const template = '<IOButtonText :class=args.class :disabled=args.disabled :size=args.size :icon=args.icon :leadingIcon=args.leadingIcon>{{args.label}}</IOButtonText>'

export default {
    title: 'UI/Atoms/Buttons/Text',
    component: IOButtonText,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonText },
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
        components: { IOButtonText },
        setup() {
            return { args };
        },
        template
    }),
};