
import IOChipIndicator from '@/components/Chips/IOChipIndicator.vue'
import '@material/web/chips/suggestion-chip.js'

const template = `<IOChipIndicator :label=args.label :status=args.status :disabled=args.disabled :variant=args.variant />`;

export default {
    title: 'UI/Atoms/Chips/Indicator',
    component: IOChipIndicator,
    render: (args) => ({
        components: { IOChipIndicator },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Indicator Chip',
        disabled: false,
        status: 'primary',
        variant: false,
    },
    argTypes: {
        status: {
            control: {
                type: 'select',
            },
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'],
        },
        variant: {
            control: {
                type: 'boolean',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            }
        }
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipIndicator },
        setup() {
            return { args };
        },
        template,
    })
};

