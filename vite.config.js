import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/", // This is crucial for GitHub Pages
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase", // Optional, fine to include
    },
  },
});
