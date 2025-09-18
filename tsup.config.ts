import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm", "iife"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  globalName: "CheckEmptyValue",
  outExtension({ format }) {
    if (format === "cjs") return { js: ".cjs" };
    if (format === "iife") return { js: ".umd.cjs" };
    return { js: ".js" };
  },
});
