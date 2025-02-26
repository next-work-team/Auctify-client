import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          // width, height props 전달시 적용하게 해주는 옵션
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
