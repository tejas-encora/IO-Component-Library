import IOButtonIconFilled from '@/components/Buttons/IconButtons/IOButtonIconFilled.vue'
import '@material/web/iconbutton/filled-icon-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOButtonIconFilled :icon=args.icon />';

export default {
    title: 'UI/Atoms/Buttons/Icon Buttons/Filled',
    component: IOButtonIconFilled,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonIconFilled },
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
    render: (args) => ({
        components: { IOButtonIconFilled },
        setup() {
            return { args };
        },
        template: template,
    })
};


