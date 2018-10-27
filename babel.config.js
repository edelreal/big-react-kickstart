module.exports = function configFunc(api) {
  api.cache.forever()
  return {
    presets: [
      ['@babel/preset-env', {
        useBuiltIns: 'usage',
        targets: '> 0.25%, not dead',
      }],
      '@babel/preset-react',
    ],

    plugins: [
      '@babel/plugin-proposal-class-properties',
    ]
  }
}
