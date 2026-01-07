import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: { Proxy: "", port: "7896" },
  plugins: [react()],
  resolve: {
    alias: {
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime"),
    },
  },
});
