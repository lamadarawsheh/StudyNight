import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-var": "error", // Errors when 'var' is used
      "no-unused-vars": "error", // Errors for unused variables
      semi: ["error", "always"], // Errors for missing semicolons
      "no-console": "warn",
      "no-cond-assign": "error",
      "no-self-assign": "error",
      "no-extra-semi": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["cypress/e2e/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.cypress,
      },
    },
  },
]);
