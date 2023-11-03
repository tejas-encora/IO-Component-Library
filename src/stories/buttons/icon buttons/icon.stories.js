import IOButtonIcon from '@/components/Buttons/IOButtonIcon.vue'
import '@material/web/iconbutton/icon-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Buttons/Icon Buttons/Default',
    component: IOButtonIcon,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonIcon },
        setup() {
            return { args };
        },
        template: '<IOButtonIcon icon={{args.icon}} v-bind="args"/>',
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
        components: { IOButtonIcon },
        setup() {
            return { args };
        },
        template: '<IOButtonIcon icon={{args.icon}} v-bind="args"/>',
    })
};


