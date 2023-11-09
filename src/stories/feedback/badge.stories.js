import IOBadge from '@/components/Badge/IOBadge.vue'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOBadge :size=args.size>{{args.label}}</IOBadge>';

export default {
    title: 'UI/Atoms/Feedback/Badge',
    component: IOBadge,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOBadge },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        label: '3',
        size: 's-large',
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
            description: 's-large is for single digit display, m-large is for multiple digit display. small should have no label',
            options: ['small', 's-large', 'm-large']
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOBadge },
        setup() {
            return { args };
        },
        template: template,
    })
};