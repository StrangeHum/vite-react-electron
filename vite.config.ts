import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    //Позволяет прописывать путь "@src/...", тоесть прокидывает пути
    alias: {
      //даёт доступ файлам в формате "{value}/файл"
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, //Доступен в локальной сети
    port: 3002,
  },
});