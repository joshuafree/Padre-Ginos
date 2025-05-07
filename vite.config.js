import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const isDevelopment = process.env.NODE_ENV === "development";
const padresURL = "https://padre-ginos-project.netlify.app";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: isDevelopment ? "http://localhost:3000" : padresURL,
        changeOrigin: true,
      },
      "/public": {
        target: isDevelopment ? "http://localhost:3000" : padresURL,
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite(), react()],
});
