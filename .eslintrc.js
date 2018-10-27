module.exports = {
  'env': {
      'browser': true,
  },

  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],

  rules: {
    'semi': ['warn', 'never'],
  },

  plugins: [
    'json',
    'react',
  ],
}
