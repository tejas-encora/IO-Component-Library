
import IOChipAssistBlank from '@/components/Chips/IOChipAssistBlank.vue'
import '@material/web/chips/assist-chip.js'

const template = `<IOChipAssistBlank :label=args.label :selected=args.selected />`;
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Assist/Blank',
    component: IOChipAssistBlank,
    render: (args) => ({
        components: { IOChipAssistBlank },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Assist Chip',
        selected: false,
    },
    argTypes: {
        selected: {
            control: {
                type: 'boolean',
            },
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipAssistBlank },
        setup() {
            return { args };
        },
        template,
    })
};

