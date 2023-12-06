<script>
export default {
    data() {
        return {
            lightIcons: [],
            itemsPerPage: 100,
            currentPage: 0,
            maxIconSize: 24,
            search: '',
            displayedIcons: [],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.lightIcons.length / this.itemsPerPage);
        },
    },
    mounted() {
        this.loadIcons();
    },
    methods: {
        loadIcons() {
            // In Vue 2, you might need to use a webpack require context
            // Example: 
            // const iconsContext = require.context('/src/assets/light', false, /\.svg$/);
            // this.lightIcons = iconsContext.keys().map(key => iconsContext(key));
        },
        filterIcons() {
            const query = this.searchQuery.toLowerCase().trim();

            if (query === '') {
                this.currentPage = 0;
                this.displayedIcons = this.lightIcons.slice(0, this.itemsPerPage); // Reset to first page icons
            } else {
                this.displayedIcons = this.lightIcons.filter(iconName =>
                    iconName.toLowerCase().includes(query)
                );
            }
        },
        prevPage() {
            if (this.currentPage > 0) {
                this.currentPage--;
                this.updateDisplayedIcons();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages - 1) {
                this.currentPage++;
                this.updateDisplayedIcons();
            }
        },
        goToPage(pageIndex) {
            this.currentPage = pageIndex;
            this.updateDisplayedIcons();
        },
        updateDisplayedIcons() {
            const start = this.currentPage * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            this.displayedIcons = this.lightIcons.slice(start, end);
        }
    },
    watch: {
        lightIcons() {
            this.updateDisplayedIcons();
        },
        currentPage() {
            this.updateDisplayedIcons();
        }
    }
};
</script>
