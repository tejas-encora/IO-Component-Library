
import IOChipAssistSvg from '@/components/Chips/IOChipAssistSvg.vue'
import '@material/web/chips/assist-chip.js'

const template = '<IOChipAssistSvg :label=args.label :src=args.src :elevated=args.elevated :disabled=args.disabled />';
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Assist/Svg',
    component: IOChipAssistSvg,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipAssistSvg },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Leading Icon',
        src: 'IO.svg',
        elevated: false,
        disabled: false,
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        elevated: {
            control: {
                type: 'boolean',
            },
        },
        src: {
            control: {
                type: 'text',
            },
            description: 'Add SVG File',
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipAssistSvg },
        setup() {
            return { args };
        },
        template,
    })
};