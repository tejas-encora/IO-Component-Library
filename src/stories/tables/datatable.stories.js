import IODataTable from '@/labs/DataTable/IODataTable.vue'
// import '@material/web/chips/suggestion-chip.js'
const template = '<IODataTable :hasSearch=args.hasSearch :items="mockData" class="zebra" />';
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

console.log(mockData);


export default {
    title: 'UI/Labs/DataTables',
    component: IODataTable,
    render: (argTypes) => ({
        components: { IODataTable },
        setup() {
            return { args, mockData };
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
        components: { IODataTable },
        setup() {
            return { args, mockData };
        },
        template,
    })
};
const docStoryElement = document.querySelector('.doc-story');
if (docStoryElement) {
    docStoryElement.style.height = 'auto';
    docStoryElement.style.overflow = 'auto';
}