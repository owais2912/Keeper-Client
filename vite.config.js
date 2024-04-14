import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig(({ mode }) => {
  return {
    define: {
      ...Object.keys(process.env).reduce((prev, key) => {
        prev[`process.env.${key}`] = JSON.stringify(process.env[key]);
        return prev;
      }, {}),
    },
    plugins: [react()],
  };
});
