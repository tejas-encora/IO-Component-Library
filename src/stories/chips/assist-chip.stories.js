
import IOChipAssist from '@/components/Chips/IOChipAssist.vue'
import '@material/web/chips/assist-chip.js'

const template = '<IOChipAssist :label=args.label :elevated=args.elevated :disabled=args.disabled />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Assist',
    component: IOChipAssist,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipAssist },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Assist Chip',
        elevated: false,
        disabled: false,
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        elevated: {
            control: {
                type: 'boolean',
            },
            description: 'Add elevation',
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipAssist },
        setup() {
            return { args };
        },
        template,
    })
};