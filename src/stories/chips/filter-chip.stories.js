
import IOChipFilter from '@/components/Chips/IOChipFilter.vue'
import '@material/web/chips/filter-chip.js'

const template = '<IOChipFilter :label=args.label :selected=args.selected :elevated=args.elevated :disabled=args.disabled :leadingIcon="args.leadingIcon" :trailingIcon="args.trailingIcon" :icon=args.icon />';
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
        disabled: false,
        leadingIcon: false,
        trailingIcon: false,
        icon: 'book-sparkles',
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
        leadingIcon: {
            control: {
                type: 'boolean',
            },
        },
        trailingIcon: {
            control: {
                type: 'boolean',
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
        components: { IOChipFilter },
        setup() {
            return { args };
        },
        template,
    })
};