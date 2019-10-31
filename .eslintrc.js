module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts'] }],
    'max-len': [0],
    'import/prefer-default-export': ['off'],
    'object-curly-newline': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['src/migration/**/*.ts'],
      rules: {
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
