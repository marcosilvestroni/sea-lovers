/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  styledComponents: {
    displayName: true,
    ssr: true,
    minify: process.env.NODE_ENV !== "development",
  },
};

module.exports = nextConfig;

