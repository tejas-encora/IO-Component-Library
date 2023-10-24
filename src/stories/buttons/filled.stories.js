import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import IOIconButtonFilled from '@/components/Buttons/IOIconButtonFilled.vue'
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
        template: '<IOButtonFilled v-bind="args">{{args.label}}</IOButtonFilled>',
    }),
    args: {
        disabled: false,
        label: 'click me',
        class: 'medium',
        icon: 'circle-plus'
    },
    argTypes: {
        class: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        icon: {
            control: {
                type: 'text'
            }
        },
        onClick: {action: 'Button clicked'},
    },
};

export const Default = {
    args: {
        disabled: false,
        label: 'click me',
        class: 'medium'
    },
    argTypes: {
        class: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        onClick: { action: 'Button clicked' },
    },
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOButtonFilled v-bind="args">{{args.label}}</IOButtonFilled>',
    })
};
export const WithIcon = {
    render: (args) => ({
        components: { IOIconButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOIconButtonFilled icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonFilled>',
    })
};

