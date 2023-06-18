/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== "production";

const nextConfig = {
  env: {
    server: dev ? process.env.API_BASE_URL : process.env.API_BASE_URL,
    amsPublickey: process.env.AMS_PUBLIC_KEY,
    amsPrivateKey: process.env.AMS_PRIVATE_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.IMAGE_HOSTNAME,
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.js"
);

module.exports = withNextIntl(nextConfig);
