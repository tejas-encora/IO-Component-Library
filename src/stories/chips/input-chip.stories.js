
import IOChipInput from '@/components/Chips/IOChipInput.vue'
import '@material/web/chips/input-chip.js'

const template = '<IOChipInput :label=args.label :variant=args.variant :close=args.close />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Input',
    component: IOChipInput,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipInput },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        label: 'Input Chip',
        variant: false,
        close: false,
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
            description: 'Show close icon',
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipInput },
        setup() {
            return { args };
        },
        template: template,
    })
};