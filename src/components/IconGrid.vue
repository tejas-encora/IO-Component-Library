<template>
    <div class="icon-grid">
        <div class="icon-container">
            <div v-for="(icon, index) in displayedIcons" :key="index" class="icon-item">
                <img :src="icon" alt="Icon" class="icon-image" />
            </div>
        </div>
    <div class="pagination">
      <input
        type="text"
        placeholder="Search icons"
        v-model="searchQuery"
        @input="filterIcons"
      />
      <button class="pagination-button prev-button" @click="prevPage">
        <span class="prev-button__arrow"></span> Previous
      </button>
      <button class="pagination-button next-button" @click="nextPage">
        Next <span class="next-button__arrow"></span>
      </button>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lightIcons: [],
            itemsPerPage: 100,
            currentPage: 0,
            maxIconSize: 24,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.lightIcons.length / this.itemsPerPage);
        },
        displayedIcons() {
            const start = this.currentPage * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.lightIcons.slice(start, end);
        },
    },
    async mounted() {
        await this.loadIcons();
    },
    methods: {
        async loadIcons() {
            const iconsContext = import.meta.globEager('/src/assets/light/*.svg');
            const iconsKeys = Object.keys(iconsContext);

            this.lightIcons = iconsKeys.map((key) => {
                const module = iconsContext[key];
                return module.default || module;
            });
        },
        filterIcons() {
            const query = this.searchQuery.toLowerCase().trim();

            if (query === '') {
                this.currentPage = 0; // Reset to the first page when the search query is empty
            } else {
                // Filter the icons based on the search query
                this.displayedIcons = this.lightIcons.filter((iconName) =>
                    iconName.toLowerCase().includes(query)
                );
            }
        },
        prevPage() {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages - 1) {
                this.currentPage++;
            }
        },
        goToPage(pageIndex) {
            this.currentPage = pageIndex;
        },
    },
};
</script>

<style scoped>
.icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.icon-image {
    max-width: 24px;
    max-height: 24px;
}

.icon-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24px, 1fr));
    gap: 20px;
    justify-content: center;
    align-content: start;
    height: 100%;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.page-numbers {
    display: flex;
    gap: 10px;
}

.page-numbers span {
    cursor: pointer;
    padding: 5px;
}

.page-numbers span.active {
    background-color: #007ac7;
    color: #fff;
}

.pagination-button {
    background-color: #007ac7;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.pagination-button:hover {
    background-color: #005f9c;
}

.page-number {
    cursor: pointer;
    padding: 5px;
}

.page-number.active {
    background-color: #007ac7;
    color: #fff;
}
</style>
