
import IOChipInputBlank from '@/components/Chips/IOChipInputBlank.vue'
import '@material/web/chips/input-chip.js'

const template = `<IOChipInputBlank :label=args.label :selected=args.selected />`;
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Input/Blank',
    component: IOChipInputBlank,
    render: (args) => ({
        components: { IOChipInputBlank },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Input Chip',
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
        components: { IOChipInputBlank },
        setup() {
            return { args };
        },
        template,
    })
};

