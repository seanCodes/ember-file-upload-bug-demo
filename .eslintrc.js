'use strict'

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]],
    },
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember-best-practices/recommended',
    'plugin:ember/recommended',
    // This line is the same as the following:
    // ```
    //   plugins: ['prettier'],
    //   extends: ['prettier'],
    //   rules: { 'prettier/prettier': 'error' }
    // ```
    'plugin:prettier/recommended',
  ],
  env: { browser: true },
  rules: {
    // Plugins

    'ember-best-practices/require-ember-lifeline': 'warn',

    'ember/no-jquery': 'error',

    'prettier/prettier': 'warn',
  },
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: { sourceType: 'script' },
      env: { browser: false, node: true },
      plugins: ['n'],
      extends: ['plugin:n/recommended'],
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
}
