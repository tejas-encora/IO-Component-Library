import { defineConfig } from "@previewjs/config";

export default defineConfig({
    /**
     * Configure a public assets directory.
     */
    publicDir: "@/public",

    /**
     * Set up a custom component to wrap around previewed components.
     *
     * Useful to set up context providers and global CSS.
     */
    wrapper: {
        path: "./Wrapper.vue",
        componentName: "Wrapper",
    },
});