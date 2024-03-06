// bundleScript.js
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// Create a compiler instance with the configuration
const compiler = webpack(webpackConfig);

module.exports.run = () => {
  console.log('bundling...')
  return new Promise((res, rej) => {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err)
        return rej(err)
      }

      res(stats)
      console.log('✅ bundled')
    })
  })
}
