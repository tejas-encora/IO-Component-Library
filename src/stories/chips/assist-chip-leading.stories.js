
import IOChipAssistLeading from '@/components/Chips/IOChipAssistLeading.vue'
import '@material/web/chips/assist-chip.js'

const template = '<IOChipAssistLeading :label=args.label :variant=args.variant :icon=args.icon :close=args.close :elevated=args.elevated :disabled=args.disabled />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Assist/Leading Icon',
    component: IOChipAssistLeading,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipAssistLeading },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Leading Icon',
        icon: 'book-sparkles',
        elevated: false,
        disabled: false,
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        icon: {
            control: {
                type: 'text',
            },
        },
        elevated: {
            control: {
                type: 'boolean',
            },
            description: 'Add elevation'
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipAssistLeading },
        setup() {
            return { args };
        },
        template,
    })
};