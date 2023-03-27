module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    selfClosing: 'always',
  },
  plugins: ['react', '@typescript-eslint', '@html-eslint'],
  rules: {
    '@html-eslint/require-closing-tags': [
      'error',
      {
        selfClosing: 'always',
      },
    ],
    '@html-eslint/no-extra-spacing-attrs': [
      'error',
      {
        enforceBeforeSelfClose: true,
      },
    ],
    '@html-eslint/indent': ['error', 2],
  },
};
