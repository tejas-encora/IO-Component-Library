
import IOChipSuggest from '@/components/Chips/IOChipSuggest.vue'
import '@material/web/chips/suggestion-chip.js'

const template = `<IOChipSuggest :label=args.label :leadingIcon=args.leadingIcon :icon=args.icon :elevated=args.elevated :disabled=args.disabled />`;

export default {
    title: 'UI/Atoms/Chips/Suggestion',
    component: IOChipSuggest,
    render: (args) => ({
        components: { IOChipSuggest },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Suggestion Chip',
        leadingIcon: false,
        icon: 'book-sparkles',
        elevated: false,
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
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipSuggest },
        setup() {
            return { args };
        },
        template,
    })
};

