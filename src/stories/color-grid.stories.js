
import ColorGrid from './ColorGrid.vue'

/**
 * 
 * Use color to create meaningful experiences while also expressing hierarchy, state, and brand identity
 */
export default {
    title: 'Styles/Colors/Tonal Palette',
    component: ColorGrid,
    tags: ['autodocs'],
    render: () => ({
        components: { ColorGrid },
        template: '<ColorGrid />',
    }),
};

    export const Default = {
        render: () => ({
            components: { ColorGrid },
            template: '<ColorGrid/>',
        })
    };


