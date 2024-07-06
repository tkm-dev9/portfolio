import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/portfolio/" : "./",
  plugins: [react(), tsconfigPaths()],
});
