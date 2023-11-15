
import IOChipInputIconRemove from '@/components/Chips/IOChipInputIconRemove.vue'
import '@material/web/chips/input-chip.js'

const template = '<IOChipInputIconRemove :label=args.label :selected=args.selected :icon=args.icon />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Input/Icon Removable',
    component: IOChipInputIconRemove,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipInputIconRemove },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Icon Removable',
        icon: 'book-sparkles',
        selected: false,
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
        icon: {
            control: {
                type: 'text',
            },
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipInputIconRemove },
        setup() {
            return { args };
        },
        template,
    })
};