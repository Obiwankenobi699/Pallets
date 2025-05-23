/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    // Remove the old file loader rule for SVGs to avoid conflicts
    config.module.rules = config.module.rules.filter(
      (rule) => !rule.test?.test?.('.svg')
    );

    // Add new rules for SVG handling with SVGR
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      }
    );

    return config;
  },
};

export default nextConfig;
