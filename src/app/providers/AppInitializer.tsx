import { useEffect } from 'react';

import { useMeQuery } from '@/pages/sign-in/hooks/useMeQuery';
import { useSSE } from '@/shared/hooks/useSSE';
import { useAuthStore } from '@/shared/store/useAuthStore';

/**
 * AppInitializer
 *
 * 애플리케이션 시작 시 사용자 인증 상태를 확인하고,
 * 그 결과를 전역 상태(useAuthStore)에 반영하는 초기화 컴포넌트입니다.
 *
 * - 서버로부터 현재 로그인된 사용자 정보를 가져오기 위해 useMeQuery를 사용합니다.
 * - 사용자 정보가 존재하면 setUser, 없으면 clearUser를 호출하여 상태를 갱신합니다.
 *
 * 이 컴포넌트는 layout.tsx 또는 Providers.tsx 내에서 실행되어야 합니다.
 * UI는 렌더링하지 않으며, 사이드 이펙트 전용입니다.
 */
export function AppInitializer() {
  const { data: user } = useMeQuery();
  console.log('🚀 ~ AppInitializer ~ user:', user);
  const { setUserState, resetAuthState } = useAuthStore();

  useSSE();

  useEffect(() => {
    if (user) setUserState(user);
    else resetAuthState();
  }, [resetAuthState, setUserState, user]);

  return null; // 또는 글로벌 로딩 스피너
}
