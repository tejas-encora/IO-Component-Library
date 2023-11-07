import IOButtonElevated from '@/components/Buttons/IOButtonElevated.vue'
import '@material/web/button/elevated-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOButtonElevated :size=args.size :disabled=args.disabled>{{args.label}}</IOButtonElevated>';

export default {
    title: 'UI/Atoms/Buttons/Elevated',
    component: IOButtonElevated,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonElevated },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        disabled: false,
        label: 'click me',
        size: 'medium',
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
        onClick: { action: 'Button clicked' },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOButtonElevated },
        setup() {
            return { args };
        },
        template: template,
    })
};