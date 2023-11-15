
import IOChipInputAvatar from '@/components/Chips/IOChipInputAvatar.vue'
import '@material/web/chips/input-chip.js'

const template = `<IOChipInputAvatar :label=args.label :selected=args.selected :src=args.src  :removable="args.removable" />`;
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
        selected: false,
        src: 'avatar.png',
        removable: false,
    },
    argTypes: {
        selected: {
            control: {
                type: 'boolean',
            },
        },
        src: {
            control: {
                type: 'text',
            },
        },
        removable: {
            control: {
                type: 'boolean',
            },
            description: 'Make removable',
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

