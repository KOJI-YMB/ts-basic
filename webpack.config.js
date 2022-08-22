const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.ts'  // エントリーポイントを宣言
  },
  output: {
    path: path.join(__dirname, 'dist'),  // 出力先の指定
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }

}
