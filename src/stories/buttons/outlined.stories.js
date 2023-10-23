
import IOButtonOutline from '@/components/Buttons/IOButtonOutline.vue'
import IOIconButtonOutline from '@/components/Buttons/IOIconButtonOutline.vue'
import '@material/web/button/outlined-button.js'
/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Buttons/Outlined',
    component: IOButtonOutline,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButIOButtonOutlineonFilled },
        setup() {
            return { args };
        },
        template: '<IOButtonOutline v-bind="args">{{args.label}}</IOButtonOutline>',
    }),
    args: {
        disabled: false,
        label: 'click me',
        class: 'medium',
        icon: 'circle-plus'
    },
    argTypes: {
        class: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        icon: {
            control: {
                type: 'text'
            }
        },
        onClick: {action: 'Button clicked'},
    },
};
export const Default = {
    args: {
        disabled: false,
        label: 'click me',
        class: 'medium'
    },
    argTypes: {
        class: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        onClick: { action: 'Button clicked' },
    },
    render: (args) => ({
        components: { IOButtonOutline },
        setup() {
            return { args };
        },
        template: '<IOButtonOutline v-bind="args">{{args.label}}</IOButtonOutline>',
    })
};
export const WithIcon = {
    render: (args) => ({
        components: { IOIconButtonOutline },
        setup() {
            return { args };
        },
        template: '<IOIconButtonOutline icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonOutline>',
    })
};
