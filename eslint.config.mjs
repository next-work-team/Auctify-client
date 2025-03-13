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
      // React 관련 규칙
      'react/no-unescaped-entities': 'off',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'] },
      ], // JSX는 .tsx, .jsx에서만 허용
      'react/react-in-jsx-scope': 'off', // React import 필요없음 (Next.js 환경 대응)
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }], // 컴포넌트 이름 PascalCase 강제

      // TypeScript 관련 규칙
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ], // 사용되지 않는 변수 경고

      // Import 정렬 관련 규칙
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
