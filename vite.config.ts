import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import resolve from "@rollup/plugin-node-resolve";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    plugins: [
      react(),
      {
        ...resolve({
          preferBuiltins: false,
          browser: true,
        }),
        enforce: "pre",
        apply: "build",
      },
      visualizer(),
    ],
    define: {
      "process.env.GOOGLE_API_KEY": JSON.stringify(process.env.GOOGLE_API_KEY),
      "process.env.GOOGLE_SEARCH_URL": JSON.stringify(
        process.env.GOOGLE_SEARCH_URL
      ),
      "process.env.POSITION_STACK_ACCESS_KEY": JSON.stringify(
        process.env.POSITION_STACK_ACCESS_KEY
      ),
      "process.env.POSITION_STACK_BASE_URL": JSON.stringify(
        process.env.POSITION_STACK_BASE_URL
      ),
      "process.env.TIME_ZONE_API": JSON.stringify(process.env.TIME_ZONE_API),
      "process.env.TIME_ZONE_ACCESS_KEY": JSON.stringify(
        process.env.TIME_ZONE_ACCESS_KEY
      ),
    },
  });
};
