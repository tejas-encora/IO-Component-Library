
import IOChipInput from '@/components/Chips/IOChipInput.vue'
import '@material/web/chips/input-chip.js'

const template = '<IOChipInput :label=args.label :removable=args.removable :selected=args.selected :disabled=args.disabled />';
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
        template,
    }),
    args: {
        label: 'Input Chip',
        selected: false,
        disabled: false,
        removable: false,
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        selected: {
            control: {
                type: 'boolean',
            },
        },
        removable: {
            control: {
                type: 'boolean',
            },
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipInput },
        setup() {
            return { args };
        },
        template,
    })
};