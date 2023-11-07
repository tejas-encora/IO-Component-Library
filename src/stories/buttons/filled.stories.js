import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import '@material/web/button/filled-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOButtonFilled :size=args.size :class=args.class :disabled=args.disabled>{{args.label}}</IOButtonFilled>';

export default {
    title: 'UI/Atoms/Buttons/Filled',
    component: IOButtonFilled,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        disabled: false,
        label: 'click me',
        class: 'primary',
        size: 'medium',
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        class: {
            control: {
                type: 'select',
            },
            options: ['success', 'error', 'warning', 'info', 'primary'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        onClick: { action: 'Button clicked' },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: template,
    })
};