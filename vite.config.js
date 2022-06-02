import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({command}) => ({
  base: command === "serve" ? process.env.ASSET_URL || "" : `${process.env.ASSET_URL || ""}/build/`,
  mode: "production",
  publicDir: false,
  build: {
    sourcemap: true,
    manifest: true,
    outDir: "public/build",
    rollupOptions: {
      input: "src/main.js",
    },
  },
  plugins: [vue()],
}));