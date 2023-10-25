import IOButtonElevated from '@/components/Buttons/IOButtonElevated.vue'
import '@material/web/button/elevated-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Buttons/Elevated',
    component: IOButtonElevated,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonElevated },
        setup() {
            return { args };
        },
        template: '<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>',
    }),
    args: {
        disabled: false,
        label: 'click me',
        class: 'medium',
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
            options: ['small', 'medium', 'large'],
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
        label: {
            control: {
                type: 'text',
            },
            description: 'Button label',
        },
        class: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
                defaultValue: 'medium',
            },
            description: 'Button size',
        },
        onClick: { action: 'Button clicked' },
    },
    render: (args) => ({
        components: { IOButtonElevated },
        setup() {
            return { args };
        },
        template: '<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>',
    })
};


