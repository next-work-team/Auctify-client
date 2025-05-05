import { useEffect, useRef } from 'react';

import { useAuthStore } from '@/shared/store/useAuthStore';
import { connectSSE } from '@/shared/lib/sse/connectSSE';

export const useSSE = () => {
  const userId = useAuthStore((state) => state.user?.userId);
  const isConnected = useRef(false);

  useEffect(() => {
    //중복 연결 방지
    if (userId && !isConnected.current) {
      connectSSE();
      isConnected.current = true;
    }
  }, [userId]);
};
