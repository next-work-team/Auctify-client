import { useQuery } from '@tanstack/react-query';

import { getAuctionDetail } from '../apis/getAuctionDetail';

// 경매 상세 정보를 가져오는 커스텀 훅
export const useAuctionDetail = (goodsId: number) => {
  return useQuery({
    queryKey: ['auctionDetail', goodsId],
    queryFn: () => getAuctionDetail(goodsId),
    enabled: !!goodsId,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
