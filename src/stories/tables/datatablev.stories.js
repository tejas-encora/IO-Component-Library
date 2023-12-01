import IODataTableV from '@/labs/DataTable/IODataTableV.vue'

const template = '<IODataTableV :hasSearch=args.hasSearch />';

export default {
    title: 'UI/Labs/DataTables/Virtual',
    component: IODataTableV,
    render: (args) => ({
        components: { IODataTableV },
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
        }
    },
};

export const Default = {
    render: (args) => ({
        components: { IODataTableV },
        setup() {
            return { args };
        },
        template,
    })
};


