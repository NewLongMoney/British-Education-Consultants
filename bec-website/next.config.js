/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Experimental options to help with Windows path handling
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
