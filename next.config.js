/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@/components"] = path.join(__dirname, "components");
    return config;
  },
};

module.exports = nextConfig;
