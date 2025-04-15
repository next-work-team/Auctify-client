import { useInfiniteQuery } from '@tanstack/react-query';

import { getAuctionList } from '../apis/getAuctionList';

export function useAuctionListQuery() {
  return useInfiniteQuery({
    queryKey: ['auctions'],
    queryFn: () => getAuctionList(),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.totalPage) {
        return undefined;
      }
      return lastPage.page + 1;
    },
  });
}
