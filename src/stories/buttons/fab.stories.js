import IOFab from '@/components/Buttons/FAB/IOFab.vue'
import '@material/web/fab/fab.js'
/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = `<IOFab :icon=args.icon :size=args.size :variant=args.variant :lowered=args.lowered />`;

export default {
    title: 'UI/Atoms/Buttons/FAB',
    component: IOFab,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOFab },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        lowered: false,
        icon: 'plus-large',
        size: 'medium',
        variant: 'surface',
    },
    argTypes: {
        icon: {
            control: {
                type: 'text',
                default: 'plus-large'
            },
            description: 'FontAwesome icon name, i.e. plus-large. No \'fa-\' suffix is needed',
        },
        size: {
            control: {
                type: 'select',
                default: 'medium',
            },
            description: 'Button size',
            options: ['small', 'medium', 'large'],
        },
        variant: {
            control: {
                type: 'select',
                default: 'surface',
            },
            description: 'Background color',
            options: ['surface', 'primary', 'secondary'],
        },
        lowered: {
            control: {
                type: 'boolean',
                defaultValue: 'false',
            },
            description: 'Lower elevation',
        },
        onClick: { action: 'Button clicked' },
    }
};

export const Default = (args) => ({
    components: { IOFab },
    setup() {
        return { args };
    },
    template,
});



