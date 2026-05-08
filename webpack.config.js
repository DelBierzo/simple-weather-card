module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'simple-weather-card.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "modules": false,
                  "targets": "> 5%, not dead",
                }
              ],
            ],
            plugins: [
              ["@babel/plugin-transform-template-literals"],
              ['@babel/plugin-proposal-decorators', { version: "legacy" }],
              ["@babel/plugin-transform-class-properties", { loose: true }],
            ],
          },
        },
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192
          }
        }
      },
    ],
  },
};
