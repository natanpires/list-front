/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      minify: true,
      ssr: true,
    },
  },
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: '',
  },
};

module.exports = nextConfig;
