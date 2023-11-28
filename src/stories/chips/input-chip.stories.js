
import IOChipInput from '@/components/Chips/IOChipInput.vue'
import '@material/web/chips/input-chip.js'

const template = `<IOChipInput :avatar=args.avatar :label=args.label :selected=args.selected :src=args.src :leadingIcon=args.leadingIcon :icon=args.icon />`;
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Input',
    component: IOChipInput,
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
        src: 'avatar.png',
        avatar: false,
        leadingIcon: false,
        icon: 'book-sparkles',
    },
    argTypes: {
        selected: {
            control: {
                type: 'boolean',
            },
        },
        avatar: {
            control: {
                type: 'boolean',
            },
        },
        leadingIcon: {
            control: {
                type: 'boolean',
            },
            description: 'Add leading icon',
        },
        icon: {
            // if: { arg: 'leadingIcon' },
            control: {
                type: 'text'
            },
            description: 'Leading icon. FontAwesome icon name, i.e. circle-plus. No \'fa-\' suffix is needed',
        },
        src: {
            control: {
                type: 'text',
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

