import IOButtonTonal from '@/components/Buttons/IOButtonTonal.vue'
import '@material/web/button/filled-tonal-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOButtonTonal :class=args.class :disabled=args.disabled>{{args.label}}</IOButtonTonal>';

export default {
    title: 'UI/Atoms/Buttons/Tonal',
    component: IOButtonTonal,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonTonal },
        setup() {
            return { args };
        },
        template: template,
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
    render: (args) => ({
        components: { IOButtonTonal },
        setup() {
            return { args };
        },
        template: template,
    })
};


