// @ts-check
import path from "node:path"
import {
  fileURLToPath
} from "node:url";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'
import globals from 'globals'

console.log(path.dirname(fileURLToPath(import.meta.url)))
const cfg = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...pluginVue.configs['flat/recommended'], {
    ignores: ['**/*.js', '**/eslint.config.mjs', '**/vitest.config.ts', '**/vite.config.ts'],
  }, {
    languageOptions: {
      "parser": vueEslintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: './tsconfig.app.json',
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
        extraFileExtensions: [ '.vue' ]
      },
    },
  },
);

export default cfg
