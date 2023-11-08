import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import '@material/web/button/filled-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOButtonFilled :class=args.class :status=args.status :size=args.size :disabled=args.disabled>{{args.label}}</IOButtonFilled>';

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
        size: 'medium',
        status: 'none',
        class: 'none',
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        status: {
            control: {
                type: 'select',
            },
            options: ['none', 'success', 'error', 'warning', 'info'],
        },
        class: {
            control: {
                type: 'select',
            },
            options: ['none','primary', 'secondary'],
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