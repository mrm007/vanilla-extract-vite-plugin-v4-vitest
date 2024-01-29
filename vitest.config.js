import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vanilla-extract.style/documentation/integrations/vite/
const vePlugin = vanillaExtractPlugin();

/**
 * @type {Record<string, import('vite').UserConfig & { test?: import('vitest').InlineConfig }>}
 */
const CONFIG_MODES = {
  // Test settings below are used along with Vitest.
  test: {
    mode: "test",
    plugins: [vePlugin],
    test: {
      environment: "happy-dom",
      bail: 3,
      logHeapUsage: true,
      globals: true,
      setupFiles: ["./setup.test.js"],
      include: ["./src/**/*.test.*"],
      name: "components",
    },
  },
};

/**
 * Create Vite's User config object.
 * @param {import('vite').ConfigEnv} config Vite environment config object
 * @returns {import('vite').UserConfig & { test?: import('vitest').InlineConfig }} Vite's User config object
 */
function createUserConfig(config) {
  const settings = CONFIG_MODES[config.mode];

  return {
    mode: settings.mode,
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.js"),
        formats: ["es"],
        fileName: "[name]",
      },
      // Let the library user control minification in their own bundler
      minify: false,
      sourcemap: false,
      target: "esnext",
      ...settings.build,
    },
    plugins: [react(), ...settings.plugins],
    resolve: settings.resolve,
    test: settings.test,
  };
}

// https://vitejs.dev/config/
export default defineConfig(createUserConfig);
