import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintJsPlugin from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    rules: eslintJsPlugin.configs.recommended.rules,
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-console': 'warn',
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...tsPlugin.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn', // Add the rule for enforcing useEffect dependencies
      'no-undef': 'off', // Disable the 'no-undef' rule because TypeScript handles this
      'react/jsx-uses-react': 'off', // Disable the rule that requires React to be in scope
    },
  },
  {
    files: ['test/**/*.ts'],
    languageOptions: {
      globals: globals.mocha,
    },
  },
];
