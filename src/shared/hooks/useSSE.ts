import { useEffect, useRef } from 'react';

import { useAuthStore } from '@/shared/store/useAuthStore';
import { connectSSE } from '@/shared/lib/sse/connectSSE';

export const useSSE = () => {
  const userId = useAuthStore((state) => state.user?.id);
  const isConnected = useRef(false);

  useEffect(() => {
    if (userId && !isConnected.current) {
      connectSSE();
      isConnected.current = true;
    }
  }, [userId]);
};
