<template>
    <div>
        <h1>Tonal Palette</h1>
        <div class="color-grid">
            <!-- Primary Grid -->
            <h3>Primary</h3>
            <div class="color-grid">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Swatch</th>
                            <th>Hex</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in primaryPalette" :key="key">
                            <td class="color-name">{{ key }}</td>
                            <td class="color-sample" :style="{ backgroundColor: value }"></td>
                            <td class="color-value">{{ value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Secondary Grid -->
            <h3>Secondary Palette</h3>
            <div class="color-grid">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Swatch</th>
                            <th>Hex</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in secondaryPalette" :key="key">
                            <td class="color-name">{{ key }}</td>
                            <td class="color-sample" :style="{ backgroundColor: value }"></td>
                            <td class="color-value">{{ value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Neutral Grid -->
            <h3>Neutral Palette</h3>
            <div class="color-grid">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Swatch</th>
                            <th>Hex</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in neutralPalette" :key="key">
                            <td class="color-name">{{ key }}</td>
                            <td class="color-sample" :style="{ backgroundColor: value }"></td>
                            <td class="color-value">{{ value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Neutral Variant Grid -->
            <h3>Neutral Variant Palette</h3>
            <div class="color-grid">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Swatch</th>
                            <th>Hex</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in neutralPalette" :key="key">
                            <td class="color-name">{{ key }}</td>
                            <td class="color-sample" :style="{ backgroundColor: value }"></td>
                            <td class="color-value">{{ value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorVariables: {},
        };
    },
    computed: {
        primaryPalette() {
            return this.getFilteredPalette('palette-primary');
        },
        secondaryPalette() {
            return this.getFilteredPalette('palette-secondary');
        },
        neutralPalette() {
            return this.getFilteredPalette('palette-neutral');
        },
        neutralVariantPalette() {
            return this.getFilteredPalette('palette-neutralvariant');
        },
    },
    methods: {
        getFilteredPalette(paletteKey) {
            // Filter variables based on paletteKey
            return Object.entries(this.colorVariables).reduce((filtered, [key, value]) => {
                if (key.includes(paletteKey)) {
                    filtered[key] = value;
                }
                return filtered;
            }, {});
        },
    },
    async created() {
        // Import the CSS variables from tokens.css
        const { default: cssText } = await import('@/assets/tokens.css');
        const regex = /--[\w-]+:[^;]+/g;
        const matches = cssText.match(regex);

        if (matches) {
            const variables = {};
            matches.forEach((match) => {
                const [property, value] = match.split(':');
                variables[property.trim()] = value.trim();
            });
            this.colorVariables = variables;
        }
    },
};
</script>

<style scoped>
.color-grid {
    overflow-x: auto;
}
h1, h2,h3 {
    font-family: 'Lato', sans-serif;
}
table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Lato', sans-serif;
}

th,
td {
    padding: 8px;
    text-align: left;
}

th {
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}

.color-name {
    white-space: nowrap;
    width: 30%;
}

.color-sample {
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
}

.color-value {
    color: #777;
}

h1 {
    font-family: 'Lato', sans-serif;
}
</style>
