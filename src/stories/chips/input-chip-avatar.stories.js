
import IOChipInputAvatar from '@/components/Chips/IOChipInputAvatar.vue'
import '@material/web/chips/input-chip.js'

const template = `<IOChipInputAvatar :label=args.label :variant=args.variant :src=args.src  :close="args.close" />`;
/**
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.  
 */
export default {
    title: 'UI/Atoms/Chips/Input/Avatar',
    component: IOChipInputAvatar,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOChipInputAvatar },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        label: 'Avatar Chip',
        variant: false,
        src: 'avatar.png',
        close: false,
    },
    argTypes: {
        variant: {
            control: {
                type: 'boolean',
            },
        },
        src: {
            control: {
                type: 'text',
            },
        },
        close: {
            control: {
                type: 'boolean',
            },
            description: 'Show close icon',
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipInputAvatar },
        setup() {
            return { args };
        },
        template,
    })
};

