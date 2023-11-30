import IODataTableSearch from '@/labs/DataTable/IODataTableSearch.vue'

const template = '<IODataTableSearch />';

export default {
    title: 'UI/Labs/DataTables',
    component: IODataTableSearch,
    render: (args) => ({
        components: { IODataTableSearch },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
    },
    argTypes: {

    },
};

export const Default = {
    render: (args) => ({
        components: { IODataTableSearch },
        setup() {
            return { args };
        },
        template,
    })
};


