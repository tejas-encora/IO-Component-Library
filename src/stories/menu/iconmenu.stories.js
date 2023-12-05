import '@material/web/menu/menu.js'
import '@material/web/iconbutton/filled-icon-button.js'
import IOIconMenu from '@/labs/Menu/IOIconMenu.vue'
import { fireEvent, userEvent, within } from '@storybook/testing-library';

const template = '<IOIconMenu @click="handleClick" />'

export default {
    title: 'UI/Labs/Menu/Icon Menu',
    component: IOIconMenu,
    render: (args) => ({
        components: { IOIconMenu },
        setup() {
            return { args };
        },
        template
    }),
    args: {

    },
    argTypes: {
        handleClick: {
            action: 'clicked',
        }
    },
};






export const Default = {
    render: (args) => ({
        components: { IOIconMenu },
        setup() {
            return { args };
        },
        template,
        methods: {

        },
    }),
};