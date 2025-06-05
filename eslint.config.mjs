import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules, // eslint:recommended
      ...pluginReact.configs.recommended.rules, // plugin:react/recommended
      ...pluginReact.configs["jsx-runtime"].rules, // plugin:react/jsx-runtime
      ...reactHooks.configs.recommended.rules, // plugin:react-hooks/recommended
      "no-console": "warn",
    },
  },
]);
