import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import '@material/web/button/filled-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Buttons/Filled',
    component: IOButtonFilled,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOButtonFilled v-bind="args" status={{args.status}}>{{args.label}}</IOButtonFilled>',
    }),
    args: {
        disabled: false,
        label: 'click me',
        class: '',
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
            options: ['success', 'error', 'warning', 'info'],
        },

        onClick: {action: 'Button clicked'},
    },
};

export const Default = {
    args: {
        disabled: false,
        label: 'click me',
        class: ''
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
            description: 'Button label',
        },
        class: {
            control: {
                type: 'select',
            },
            options: ['success', 'error', 'warning', 'info'],
        },
        onClick: { action: 'Button clicked' },
    },
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOButtonFilled v-bind="args" status={{args.status}}>{{args.label}}</IOButtonFilled>',
    })
};


