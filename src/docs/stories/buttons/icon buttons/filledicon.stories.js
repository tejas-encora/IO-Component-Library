import IOIconButtonFilled from '@/components/Buttons/IconButtons/IOIconButtonFilled.vue'
import '@material/web/iconbutton/filled-icon-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOIconButtonFilled :icon=args.icon />';

export default {
    title: 'UI/Atoms/Buttons/Icon Buttons/Filled',
    component: IOIconButtonFilled,
    render: (args) => ({
        components: { IOIconButtonFilled },
        setup() {
            return { args };
        },
        template,
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
        components: { IOIconButtonFilled },
        setup() {
            return { args };
        },
        template,
    })
};


