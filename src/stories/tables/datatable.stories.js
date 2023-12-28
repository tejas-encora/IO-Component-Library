import IODataTable from '@/labs/DataTable/IODataTable.vue'
// import '@material/web/chips/suggestion-chip.js'

const template = '<IODataTable :hasSearch=args.hasSearch :items="mockData" class="zebra" :density=args.density :show-select=args.showSelect />';
const mockData = [];

function getRandomName() {
    const names = ["Aragorn", "Legolas", "Gimli", "Frodo", "Samwise", "Gandalf", "Bilbo", "Gollum", "Sauron", "Galadriel", "Boromir", "Merry", "Pippin", "Eowyn", "Faramir", "Theoden", "Saruman", "Elrond", "Arwen", "Celeborn"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 20; i++) {
    const randomObject = {
        "name": `${getRandomName()}`,
        "race": Math.random() < 0.5 ? "Human" : "Elf",
        "gender": Math.random() < 0.5 ? "Male" : "Female",
        "birth": `TA ${getRandomNumber(1000, 3000)}`,
    };
    mockData.push(randomObject);
}

export default {
    title: 'UI/Labs/DataTables',
    component: IODataTable,
    render: (args) => ({
        components: { IODataTable },
        setup() {
            return { args, mockData };
        },
        template,
    }),
    args: {
        hasSearch: false,
        density: 'default',
        showSelect: false,
    },
    argTypes: {
        hasSearch: {
            control: {
                type: 'boolean',
            },
            description: 'Show search',
        },
        density: {
            control: {
                type: 'select',
            },
            description: 'Adjusts the vertical height of the table rows',
            options: ['default', 'comfortable', 'compact']
        },
        showSelect: {
            control: {
                type: 'boolean',
            },
            description: 'Turns checkboxes on/off',
        },
    },
};

export const Default = {
    render: (args) => ({
        components: { IODataTable },
        setup() {
            return { args, mockData };
        },
        template,
    })
};

// const docStoryElement = document.querySelector(".docs-story");
// const vDataTableElement = document.querySelector(".zebra");


// if (vDataTableElement) {
//     docStoryElement.style.height = "400px";
// } else {
//     docStoryElement.style.height = "200px";
//     console.log("Element not found");
// }