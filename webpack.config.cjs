const path = require('path');
const outPath = path.resolve(__dirname, 'dist')

console.debug(`🖊️ Writing bundle to ${outPath}`)

module.exports = {
  mode: 'production',
  entry: './ts/index.ts', // Your entry file
  output: {
    filename: 'index.js',
    path: outPath,
    libraryTarget: 'module',
    chunkFormat: 'module', // Specify the chunkFormat
  },
  experiments: {
    outputModule: true, // Enable experiments.outputModule
  },
  target: 'node',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Include '.js' extension
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
