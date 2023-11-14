
import IOChipInputLeading from '@/components/Chips/IOChipInputLeading.vue'
import '@material/web/chips/input-chip.js'

const template = '<IOChipInputLeading :label=args.label :variant=args.variant :icon=args.icon :close=args.close />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Input/Leading Icon',
    component: IOChipInputLeading,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipInputLeading },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Leading Icon',
        icon: 'book-sparkles',
        variant: false,
        close: false
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
        close: {
            control: {
                type: 'boolean',
            },
            description: 'Show close icon'
        },
        icon: {
            control: {
                type: 'text',
            },
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipInputLeading },
        setup() {
            return { args };
        },
        template,
    })
};