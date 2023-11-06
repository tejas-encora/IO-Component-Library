import IOButtonIconOutline from '@/components/Buttons/IconButtons/IOButtonIconOutline.vue'
import '@material/web/iconbutton/outlined-icon-button.js'

/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Buttons/Icon Buttons/Outlined',
    component: IOButtonIconOutline,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonIconOutline },
        setup() {
            return { args };
        },
        template: '<IOButtonIconOutline icon={{args.icon}} v-bind="args"/>',
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
        components: { IOButtonIconOutline },
        setup() {
            return { args };
        },
        template: '<IOButtonIconOutline icon={{args.icon}} v-bind="args"/>',
    })
};


