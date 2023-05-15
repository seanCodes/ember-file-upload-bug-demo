'use strict'

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  printWidth: 120,
  proseWrap: 'preserve',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    {
      files: '*.{css,less,scss,html,hbs,yml,yaml}',
      options: { singleQuote: false },
    },
    { files: '*.{html,hbs}', options: { printWidth: 200 } },
  ],
}
