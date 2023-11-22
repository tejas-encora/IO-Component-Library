
import IOChipAssist from '@/components/Chips/IOChipAssist.vue'
import '@material/web/chips/assist-chip.js'

const template = `<IOChipAssist :svg=args.svg :src=args.src :label=args.label :leadingIcon=args.leadingIcon :icon=args.icon :elevated=args.elevated :disabled=args.disabled />`;

export default {
    title: 'UI/Atoms/Chips/Assist',
    component: IOChipAssist,
    render: (args) => ({
        components: { IOChipAssist },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Assist Chip',
        leadingIcon: false,
        icon: 'book-sparkles',
        elevated: false,
        svg: false,
        src: 'IO.svg',
        disabled: false,
    },
    argTypes: {
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
        elevated: {
            control: {
                type: 'boolean',
            },
            description: 'Add elevation',
        },
        svg: {
            control: {
                type: 'boolean',
            },
            description: 'Use SVG image',
        },
        src: {
            control: {
                type: 'text',
            },
            description: 'SVG source. Needs to be a file in your public directory',
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

