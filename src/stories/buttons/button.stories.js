import IOButtonFilled from '@/components/Buttons/IOButtonFilled.vue'
import IOButtonOutline from '@/components/Buttons/IOButtonOutline.vue'
import IOButtonElevated from '@/components/Buttons/IOButtonElevated.vue'
import IOIconButtonFilled from '@/components/Buttons/IOIconButtonFilled.vue'
import IOIconButtonOutline from '@/components/Buttons/IOIconButtonOutline.vue'
import IOIconTextButton from '@/components/Buttons/IOIconTextButton.vue'
import IOTextButton from '@/components/Buttons/IOTextButton.vue'
import IOButtonTonal from '@/components/Buttons/IOButtonTonal.vue'

import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/button/elevated-button.js'
import '@material/web/button/filled-tonal-button.js'


export default {
    title: 'UI/Atoms/Buttons',
    component: IOButtonFilled,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IOButtonFilled },
        setup() {
            return { args };
        },
        template: '<IOButtonFilled :args>{{args.label}}</IOButtonFilled>',
    }),
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
    },
};
export const Default = {
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
        template: '<IOIconButtonFilled :args>{{args.label}}</IOIconButtonFilled>',
    })
};
export const Outlined = {
    render: (args) => ({
        components: { IOButtonOutline },
        setup() {
            return { args };
        },
        template: '<IOButtonOutline :args>{{args.label}}</IOButtonOutline>',
    })
};
export const OutlineWithIcon = {
    render: (args) => ({
        components: { IOIconButtonOutline },
        setup() {
            return { args };
        },
        template: '<IOIconButtonOutline :args>{{args.label}}</IOIconButtonOutline>',
    })
};

export const Text = {
    render: (args) => ({
        components: { IOTextButton },
        setup() {
            return { args };
        },
        template: '<IOTextButton :args>{{args.label}}</IOTextButton>',
    })
};
export const TextWithIcon = {
    render: (args) => ({
        components: { IOIconTextButton },
        setup() {
            return { args };
        },
        template: '<IOIconTextButton :args>{{args.label}}</IOIconTextButton>',
    })
};

export const Elevated = {
    render: (args) => ({
        components: { IOButtonElevated },
        setup() {
            return { args };
        },
        template: '<IOButtonElevated :args>{{args.label}}</IOButtonElevated>',
    })
};

export const Tonal = {
    render: (args) => ({
        components: { IOButtonTonal },
        setup() {
            return { args };
        },
        template: '<IOButtonTonal :args>{{args.label}}</IOButtonTonal>',
    })
};