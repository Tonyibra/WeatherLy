module.exports = {
  env: {
    API_KEY: "fe59f54d9745f8b87580dcc5b70f2ed0",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
      resourceQuery: /^((?!ni-ignore).)*$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: `/static/images/`,
            outputPath: `/static/images/`,
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};
