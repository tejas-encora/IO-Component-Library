import IOButtonTonal from '@/components/Buttons/IOButtonTonal.vue'
import '@material/web/button/filled-tonal-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Buttons/Tonal',
    component: IOButtonTonal,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonTonal },
        setup() {
            return { args };
        },
        template: '<IOButtonTonal v-bind="args">{{args.label}}</IOButtonTonal>',
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
        components: { IOButtonTonal },
        setup() {
            return { args };
        },
        template: '<IOButtonTonal v-bind="args">{{args.label}}</IOButtonTonal>',
    })
};


