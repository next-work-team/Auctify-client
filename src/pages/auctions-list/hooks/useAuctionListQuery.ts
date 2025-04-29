import { useInfiniteQuery } from '@tanstack/react-query';

import { AuctionFilter } from '@/features/auction-list-filter/store/useAuctionFilterStore';

import { getAuctionList } from '../apis/getAuctionList';

export function useAuctionListQuery(filters?: AuctionFilter) {
  return useInfiniteQuery({
    queryKey: ['auctionList', filters],
    queryFn: ({ pageParam = 1 }) => getAuctionList({ pageParam, filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.last ? undefined : lastPage.data.number + 1,
  });
}
