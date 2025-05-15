import { useSSE } from '@/shared/hooks/useSSE';

export interface BidHistoryItem {
  user: string;
  amount: number;
  time: string;
}

export function useBidHistorySSE(
  auctionId: string,
  initialData: BidHistoryItem[],
) {
  const { data, isConnected } = useSSE<BidHistoryItem[]>({
    url: `/api/sse/auction/${auctionId}/bids`,
    withCredentials: true,
    onError: (err) => {
      console.error('SSE 에러:', err);
    },
    initialData,
  });

  return {
    data: data ?? initialData,
    isConnected,
  };
}
