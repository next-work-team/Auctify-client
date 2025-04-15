import type { NextConfig } from 'next';

// Next.js 설정 객체 정의
const nextConfig: NextConfig = {
  // Webpack 설정 확장
  webpack(config) {
    // SVG 파일에 대한 새로운 로더 규칙 추가
    config.module.rules.push({
      // .svg 확장자 파일을 대상으로 함
      test: /\.svg$/,
      // JS 또는 TS 파일 내에서 import될 경우에만 적용
      issuer: /\.[jt]sx?$/,
      use: [
        {
          // @svgr/webpack 로더 사용
          loader: '@svgr/webpack',
          options: {
            // SVGO(최적화 도구) 활성화
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  // width, height 속성을 제거하여 Tailwind로 크기 제어 가능하게 만듦
                  name: 'removeDimensions',
                  active: true,
                },
                {
                  // viewBox 속성은 유지 (false여야 Tailwind로 반응형 크기 제어 가능)
                  name: 'removeViewBox',
                  active: false,
                },
                // {
                //   // fill, stroke, style 속성 제거 → Tailwind 클래스(`text-*`, `stroke-*`)로 색상 및 스타일 제어 가능
                //   name: 'removeAttrs',
                //   params: {
                //     attrs: ['fill', 'stroke', 'style'],
                //   },
                // },
              ],
            },
          },
        },
      ],
    });

    // 수정된 Webpack 설정 반환
    return config;
  },
};

export default nextConfig;
