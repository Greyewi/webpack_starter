const path = require('path')

module.exports = {
  template: path.resolve(__dirname, '../src/template.html'),
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
}