/** @type {import('next').NextConfig} */
const nextConfig = {
// Workaround for useReducer being called twice: turn strict mode to false
// TODO: Research if this is a bad practice
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
