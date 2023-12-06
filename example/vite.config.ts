import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {jsjsx} from 'jsjsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsjsx()],
});
