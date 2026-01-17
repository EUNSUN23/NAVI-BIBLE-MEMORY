import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindcss from 'eslint-plugin-tailwindcss';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['.*', 'dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...tailwindcss.configs['flat/recommended'],
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': { typescript: true },
      react: { version: '18.3' },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'tailwindcss/classnames-order': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'react/jsx-handler-names': [
        'off',
        {
          eventHandlerPrefix: 'handle',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            // Use public API only
            '@app/**',
            '@pages/*/**',
            '@widgets/*/**',
            '@features/*/**',
            '@entities/*/model/**',
            '@entities/*/api/**',
            '@entities/*/ui/**',
            '@entities/*/lib/**',
            '@entities/*/config/**',
            '@entities/*/assets/**',

            '../**/app',
            '../**/pages',
            '../**/widgets',
            '../**/features',
            '../**/entities',
            '../**/shared',
          ],
        },
      ],
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            // pages
            {
              target: 'src/pages',
              from: 'src/app',
            },
            // Cross import
            {
              target: 'src/pages/*/**/*',
              from: 'src/pages/*/index.ts',
            },
            // widgets
            {
              target: 'src/widgets',
              from: 'src/app',
            },
            {
              target: 'src/widgets',
              from: 'src/pages',
            },
            // Cross import
            {
              target: 'src/widgets/*/**/*',
              from: 'src/widgets/*/index.ts',
            },

            // features
            {
              target: 'src/features',
              from: 'src/app',
            },
            {
              target: 'src/features',
              from: 'src/pages',
            },
            {
              target: 'src/features',
              from: 'src/widgets',
            },
            // Cross import
            {
              target: 'src/features/*/**/*',
              from: 'src/features/*/index.ts',
            },

            // entities
            {
              target: 'src/entities',
              from: 'src/app',
            },
            {
              target: 'src/entities',
              from: 'src/pages',
            },
            {
              target: 'src/entities',
              from: 'src/widgets',
            },
            {
              target: 'src/entities',
              from: 'src/features',
            },
            // Cross import
            {
              target: 'src/entities/*/**/*',
              from: 'src/entities/*/index.ts',
            },
            // shared
            {
              target: 'src/shared',
              from: 'src/app',
            },
            {
              target: 'src/shared',
              from: 'src/pages',
            },
            {
              target: 'src/shared',
              from: 'src/widgets',
            },
            {
              target: 'src/shared',
              from: 'src/features',
            },
            {
              target: 'src/shared',
              from: 'src/entities',
            },
          ],
        },
      ],
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', '**/msw/*', '**/test/**/*'],
    rules: {
      'no-restricted-imports': 'off',
      'import/no-restricted-paths': 'off',
    },
  },
);
