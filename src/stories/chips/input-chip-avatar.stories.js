
import IOChipInputAvatar from '@/components/Chips/IOChipInputAvatar.vue'
import '@material/web/chips/input-chip.js'

const template = `<IOChipInputAvatar :label=args.label :variant=args.variant :src=args.src />`;
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
        template: template,
    }),
    args: {
        label: 'Avatar Chip',
        variant: false,
        src:  'avatar.png',
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
    },
};

export const Default = {
    render: (args) => ({
        components: { IOChipInputAvatar },
        setup() {
            return { args };
        },
        template: template,
    })
};