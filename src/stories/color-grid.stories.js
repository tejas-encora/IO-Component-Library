
import ColorGrid from '@/components/ColorGrid.vue'

/**
 * 
 * Use color to create meaningful experiences while also expressing hierarchy, state, and brand identity
 */
export default {
    title: 'Styles/Colors/Tonal Palette',
    component: ColorGrid,
    tags: ['autodocs'],
    render: (args) => ({
        components: { ColorGrid },
        setup() {
            return { args };
        },
        template: '<ColorGrid tone={{arg.tone}} v-bind="args"/>',
    }),
    args: {
        tone: {
            type: String,
            default: 'primary'
        }
    },
    argTypes: {
        tone: {
            control: {
                type: 'select',
            },
            options: ['primary', 'secondary'],
        },
        render: (args) => ({
            components: ColorGrid ,
            setup() {
                return { args };
            },
            template: '<ColorGrid tone={{arg.tone}}/>',
        }),
    }
};

    export const Default = {
        render: (args) => ({
            components: { ColorGrid },
            setup() {
                return { args };
            },
            template: '<ColorGrid tone={{arg.tone}}/>',
        })
    };


