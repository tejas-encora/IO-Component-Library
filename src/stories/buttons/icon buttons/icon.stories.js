import IOButtonIcon from '@/components/Buttons/IconButtons/IOButtonIcon.vue'
import '@material/web/iconbutton/icon-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */

const template = '<IOButtonIcon :icon=args.icon :disabled=args.disabled />';

export default {
    title: 'UI/Atoms/Buttons/Icon Buttons/Default',
    component: IOButtonIcon,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonIcon },
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
        components: { IOButtonIcon },
        setup() {
            return { args };
        },
        template: template,
    })
};


