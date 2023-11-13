
import IOChipFilter from '@/components/Chips/IOChipFilter.vue'
import '@material/web/chips/filter-chip.js'

const template = '<IOChipFilter :label=args.label :selected=args.selected :elevated=args.elevated />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Filter',
    component: IOChipFilter,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipFilter },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Filter Chip',
        selected: false,
        elevated: false,
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
        elevated: {
            control: {
                type: 'boolean',
            },
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipFilter },
        setup() {
            return { args };
        },
        template,
    })
};