const path = require('path')

module.exports = {
  template: path.resolve(__dirname, '../src/template.html'),
  src: path.resolve(__dirname, '../src'),
  tsEntry: path.resolve(__dirname, '../src/index.ts'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
}