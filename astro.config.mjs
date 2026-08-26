import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nodouy.github.io",
  // En GitHub Pages el sitio vive bajo /nodo-web; el workflow de
  // publicación define BASE_PATH. En desarrollo local queda "/".
  base: process.env.BASE_PATH || "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
