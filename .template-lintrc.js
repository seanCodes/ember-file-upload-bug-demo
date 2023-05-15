'use strict'

module.exports = {
  extends: ['recommended', 'stylistic', 'a11y'],
  rules: {
    'block-indentation': ['warn', 'tab'],
    'no-multiple-empty-lines': ['warn', { max: 2 }],
    'no-duplicate-landmark-elements': 'off', // rule has incomplete implementation
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'eol-last': 'off',
        'no-multiple-empty-lines': 'off',
      },
    },
  ],
}
