
import IOChipAssistLeading from '@/components/Chips/IOChipAssistLeading.vue'
import '@material/web/chips/input-chip.js'

const template = '<IOChipAssistLeading :label=args.label :variant=args.variant :icon=args.icon :close=args.close />';
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
        template: template,
    }),
    args: {
        label: 'Leading Icon',
        icon: 'book-sparkles',
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
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipAssistLeading },
        setup() {
            return { args };
        },
        template: template,
    })
};