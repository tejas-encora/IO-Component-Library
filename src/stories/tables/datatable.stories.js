import IODataTable from '@/labs/DataTable/IODataTable.vue'
const template = '<IODataTable :hasSearch=args.hasSearch :items=args.items />';

export default {
    title: 'UI/Labs/DataTables',
    component: IODataTable,
    render: (args) => ({
        components: { IODataTable },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        hasSearch: false,
        items: [],
    },
    argTypes: {
        hasSearch: {
            controls: {
                type: 'boolean',
            },
            description: 'Show search',
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IODataTable },
        setup() {
            return { args };
        },
        template,
    })
};


