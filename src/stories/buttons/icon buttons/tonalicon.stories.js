import IOButtonIconTonal from '@/components/Buttons/IconButtons/IOButtonIconTonal.vue'
import '@material/web/iconbutton/filled-tonal-icon-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOButtonIconTonal :icon=args.icon :disabled=args.disabled />';

export default {
    title: 'UI/Atoms/Buttons/Icon Buttons/Tonal',
    component: IOButtonIconTonal,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonIconTonal },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        disabled: false,
        icon: 'file-magnifying-glass',
    },
    argTypes: {
        icon: {
            control: {
                type: 'text'
            },
            description: 'FontAwesome icon name, i.e. circle-plus. No \'fa-\' suffix is needed',
        },
        onClick: {action: 'Button clicked'},
    },
};

export const Default = {
    args: {
        disabled: false,
        icon: 'file-magnifying-glass',
    },
    argTypes: {
        icon: {
            control: {
                type: 'text'
            },
            description: 'FontAwesome icon name, i.e. circle-plus. No \'fa-\' suffix is needed',
        },
        onClick: { action: 'Button clicked' },
    },
    render: (args) => ({
        components: { IOButtonIconTonal },
        setup() {
            return { args };
        },
        template: template,
    })
};


