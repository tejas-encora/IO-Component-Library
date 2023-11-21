import '@material/web/button/elevated-button.js'
import IOButtonElevated from '@/components/Buttons/IOButtonElevated.vue'

const template = '<IOButtonElevated :disabled=args.disabled :size=args.size :icon=args.icon :leadingIcon=args.leadingIcon>{{args.label}}</IOButtonElevated>'

export default {
    title: 'UI/Atoms/Buttons/Elevated',
    component: IOButtonElevated,
    render: (args) => ({
        components: { IOButtonElevated },
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
    },
};

export const Button = {
    render: (args) => ({
        components: { IOButtonElevated },
        setup() {
            return { args };
        },
        template
    }),
};