import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import IOButtonOutline from '@/components/Buttons/IOButtonOutline.vue'
import IOButtonElevated from '@/components/Buttons/IOButtonElevated.vue'
import IOIconButtonFilled from '@/components/Buttons/IOIconButtonFilled.vue'
import IOIconButtonOutline from '@/components/Buttons/IOIconButtonOutline.vue'
import IOIconTextButton from '@/components/Buttons/IOIconTextButton.vue'
import IOTextButton from '@/components/Buttons/IOTextButton.vue'
import IOButtonTonal from '@/components/Buttons/IOButtonTonal.vue'
import IOIconButtonTonal from '@/components/Buttons/IOIconButtonTonal.vue'
import IOIconButtonElevated from '@/components/Buttons/IOIconButtonElevated.vue'

import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/button/elevated-button.js'
import '@material/web/button/filled-tonal-button.js'
/**
 * 
 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
 */
export default {
    title: 'UI/Atoms/Buttons',
    component: IOButtonFilled,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOButtonFilled v-bind="args">{{args.label}}</IOButtonFilled>',
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
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOButtonFilled v-bind="args">{{args.label}}</IOButtonFilled>',
    })
};
export const FilledWithIcon = {
    render: (args) => ({
        components: { IOIconButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOIconButtonFilled icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonFilled>',
    })
};

export const Outlined = {
    render: (args) => ({
        components: { IOButtonOutline },
        setup() {
            return { args };
        },
        template: '<IOButtonOutline v-bind="args">{{args.label}}</IOButtonOutline>',
    })
};
export const OutlineWithIcon = {
    render: (args) => ({
        components: { IOIconButtonOutline },
        setup() {
            return { args };
        },
        template: '<IOIconButtonOutline icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonOutline>',
        
    })
};

export const Text = {
    render: (args) => ({
        components: { IOTextButton },
        setup() {
            return { args };
        },
        template: '<IOTextButton v-bind="args">{{args.label}}</IOTextButton>',
    })
};
export const TextWithIcon = {
    render: (args) => ({
        components: { IOIconTextButton },
        setup() {
            return { args };
        },
        template: '<IOIconTextButton v-bind="args">{{args.label}}</IOIconTextButton>',
    })
};

export const Elevated = {
    render: (args) => ({
        components: { IOButtonElevated },
        setup() {
            return { args };
        },
        template: '<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>',
    })
};

export const ElevatedWithIcon = {
    render: (args) => ({
        components: { IOIconButtonElevated },
        setup() {
            return { args };
        },
        template: '<IOIconButtonElevated v-bind="args">{{args.label}}</IOIconButtonElevated>',
    })
};

export const Tonal = {
    render: (args) => ({
        components: { IOButtonTonal },
        setup() {
            return { args };
        },
        template: '<IOButtonTonal v-bind="args">{{args.label}}</IOButtonTonal>',
    })
};
export const TonalWithIcon = {
    render: (args) => ({
        components: { IOIconButtonTonal },
        setup() {
            return { args };
        },
        template: '<IOIconButtonTonal v-bind="args">{{args.label}}</IOIconButtonTonal>',
    })
};
