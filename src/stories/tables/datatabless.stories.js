import IODataTableSS from '@/labs/DataTable/IODataTableSS.vue'

const template = '<IODataTableSS :hasSearch=args.hasSearch />';

export default {
    title: 'UI/Labs/DataTables/Server Side',
    component: IODataTableSS,
    render: (args) => ({
        components: { IODataTableSS },
        setup() {
            return { args };
        },
        template,
    }),
    args: {
        hasSearch: false,
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
        components: { IODataTableSS },
        setup() {
            return { args };
        },
        template,
    })
};


