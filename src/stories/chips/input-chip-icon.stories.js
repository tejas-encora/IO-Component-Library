
import IOChipInputIcon from '@/components/Chips/IOChipInputIcon.vue'
import '@material/web/chips/input-chip.js'

const template = '<IOChipInputIcon :label=args.label :selected=args.selected :icon=args.icon />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Input/Icon',
    component: IOChipInputIcon,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipInputIcon },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'With Icon',
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
        components: { IOChipInputIcon },
        setup() {
            return { args };
        },
        template,
    })
};