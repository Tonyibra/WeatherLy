module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
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
