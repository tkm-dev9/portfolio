import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "portfolio" : "./",
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    include: ["./src/tests/**/*.test.tsx"],
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
