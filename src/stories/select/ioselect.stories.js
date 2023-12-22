import IOSelect from '@/components/Select/IOSelect.vue';
const template = '<IOSelect :items="args.items" />';

export default {
    title: 'UI/atoms/Select/IOSelect',
    component: IOSelect,
    
    args: {
        items: ['Option 1', 'Option 2', 'Option 3'],
        density: "compact"
    },
    argTypes: {
        density: {
            control: {
                type: 'select',
                options: ["compact", "normal"]
            }
        }
    }
};

export const Default = {
    render: (args) => ({
        components: { IOSelect },
        setup() {
            return { args };
        },
        template,
    })
};
