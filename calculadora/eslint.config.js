import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginStandard from 'eslint-plugin-standard'

export default [
  { ignores: ['dist', 'node_modules', 'storybook-static', 'coverage'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      standard: eslintPluginStandard,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Reglas adicionales
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Regla personalizada: prohibir punto y coma
      semi: ['error', 'never'],

      // Reglas del estilo StandardJS
      'comma-dangle': ['error', 'never'],
      'no-extra-semi': 'error',
      'space-before-function-paren': ['error', 'always']
    }
  }
]
