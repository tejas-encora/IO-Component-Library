
import IOChipInputTrailing from '@/components/Chips/IOChipInputTrailing.vue'
import '@material/web/chips/input-chip.js'

const template = '<IOChipInputTrailing :label=args.label :variant=args.variant />';
/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Chips',
    component: IOChipInputTrailing,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipInputTrailing },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        label: 'Input Chip',
        variant: false
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        variant: {
            control: {
                type: 'boolean',
            },
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipInputTrailing },
        setup() {
            return { args };
        },
        template: template,
    })
};