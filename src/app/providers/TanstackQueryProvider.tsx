'use client';

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

/**
 * TanstackQueryProvider
 *
 * 전역에서 React Query를 사용할 수 있도록 Provider를 설정하는 컴포넌트입니다.
 * - QueryClientProvider로 React Query의 context를 감쌉니다.
 * - 개발 환경에서만 React Query Devtools를 활성화하여 디버깅을 도와줍니다.
 *
 * @param {ReactNode} children - 이 Provider 안에 포함될 컴포넌트들 (앱 전체)
 */
export default function TanstackQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* 개발 환경에서만 React Query Devtools 표시 */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
