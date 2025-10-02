import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // proxy to direct all urls starting with /api to the server
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
