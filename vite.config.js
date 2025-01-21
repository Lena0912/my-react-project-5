import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-react-project-5/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
