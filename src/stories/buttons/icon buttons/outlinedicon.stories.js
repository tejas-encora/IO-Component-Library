import IOIconButtonOutline from '@/components/Buttons/IconButtons/IOIconButtonOutline.vue'
import '@material/web/iconbutton/outlined-icon-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOIconButtonOutline :icon=args.icon :disabled=args.disabled />';

export default {
    title: 'UI/Atoms/Buttons/Icon Buttons/Outlined',
    component: IOIconButtonOutline,
    render: (args) => ({
        components: { IOIconButtonOutline },
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
        components: { IOIconButtonOutline },
        setup() {
            return { args };
        },
        template,
    })
};


