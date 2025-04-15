'use client';

import { PropsWithChildren } from 'react';

import TanstackQueryProvider from './TanstackQueryProvider';
import { AppInitializer } from './AppInitializer';

/**
 * Providers
 *
 * 애플리케이션 전역에서 필요한 Provider들을 감싸는 컴포넌트입니다.
 * - React Query 환경 설정을 위한 TanstackQueryProvider
 * - 사용자 인증 상태 초기화를 위한 AppInitializer
 *
 * 이 컴포넌트는 일반적으로 `layout.tsx` 내에서 사용되어
 * 전역 설정 및 초기 상태를 앱 전체에 적용할 수 있도록 합니다.
 *
 * @param {ReactNode} children - Provider가 감싸게 될 애플리케이션 컴포넌트 트리
 */
export default function Providers({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      {/* 사용자 정보 초기화: 로그인 여부 판단 후 zustand 상태 세팅 */}
      <AppInitializer />

      {/* 앱 전체 UI */}
      {children}
    </TanstackQueryProvider>
  );
}
