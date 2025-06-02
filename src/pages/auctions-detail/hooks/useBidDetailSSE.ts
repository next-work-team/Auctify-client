import { BACKEND_URL } from '@/shared/constants';
import { useSSE } from '@/shared/hooks/useSSE';

export interface BidDetailSSE {
  goodsId: number;
  bidHistory: {
    nickname: string;
    price: number;
    createdAt: Date;
  }[];
  auctionSummary: {
    maxBidPrice: number;
    remainingTime: string;
    participantsCount: number;
  };
}

export function useBidDetailSSE(auctionId: number, initialData?: BidDetailSSE) {
  const { data, isConnected, isLoading } = useSSE<BidDetailSSE>({
    url: `${BACKEND_URL}/api/sse/subscribe/bid`,
    withCredentials: true,
    onError: (err) => {
      console.error('SSE 에러:', err);
    },
    initialData,
  });

  return {
    data: data ?? initialData,
    isConnected,
    isLoading,
  };
}
