import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      // ✅ 기본 스타일 규칙
      indent: ['error', 2], // 2칸 들여쓰기
      quotes: ['error', 'single'], // 싱글 따옴표 사용
      semi: ['error', 'always'], // 세미콜론 사용
      'object-curly-spacing': ['error', 'always'], // 객체 중괄호 내부 공백 추가
      'arrow-parens': ['error', 'always'], // 화살표 함수의 매개변수 괄호 항상 사용

      // ✅ React 관련 규칙
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'] },
      ], // JSX는 .tsx, .jsx에서만 허용
      'react/react-in-jsx-scope': 'off', // React import 필요 없음 (Next.js 환경 대응)
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }], // 컴포넌트 이름 PascalCase 강제

      // ✅ TypeScript 관련 규칙
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // 사용되지 않는 변수 경고

      // ✅ Import 정렬 관련 규칙
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // 내장 모듈은 첫 번째
            'external', // 외부 라이브러리는 두 번째
            'internal', // 프로젝트 내 모듈은 세 번째
            'parent', // 상위 디렉토리는 네 번째
            'sibling', // 같은 디렉토리는 다섯 번째
            'index', // 마지막으로 index 파일
          ],
          'newlines-between': 'always', // 그룹 사이에 항상 빈 줄 추가
        },
      ], // import 정렬
    },
  },
];

export default eslintConfig;
