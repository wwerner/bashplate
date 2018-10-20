module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          parser: {
            amd: false
          }
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader"
        }
      ]
    }
  }
};
