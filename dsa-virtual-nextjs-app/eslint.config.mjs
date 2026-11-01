import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      // Legacy vendor JS files – not TypeScript source, not part of the build graph
      "public/**",
    ],
  },
  {
    // Visualization experiment pages use (window as any) to bridge with the
    // untyped jQuery/Canvas animation engine loaded via dynamic <script> tags.
    // Typing this bridge is a separate, larger refactor (not in scope for Issue #28).
    files: ["src/app/experiments/*/page.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
