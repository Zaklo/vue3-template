import { fileURLToPath, URL } from "node:url";
import glsl from "vite-plugin-glsl";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), glsl()],
  publicDir: "./src/public",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/resources";`,
      },
    },
  },
});
