import { useMutation, useQueryClient } from '@tanstack/react-query';

import { bidAuction } from '../apis/bidAuction';

export const useBidAuction = (goodsId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bidPrice }: { bidPrice: number }) =>
      bidAuction({ goodsId, bidPrice }),

    onSuccess: () => {
      // 입찰 성공 시 상세 페이지 데이터 invalidate
      queryClient.invalidateQueries({
        queryKey: ['auctionDetail', goodsId],
      });
    },

    onError: (error: Error) => {
      console.error('입찰 실패:', error);
    },
  });
};
