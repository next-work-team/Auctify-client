'use client';

import { useInView } from 'react-intersection-observer';

import { useAuctionListQuery } from '@/pages/auctions-list/hooks/useAuctionListQuery';
import AuctionViewSelector from '@/features/auction-list-view/ui/AuctionViewSelector';
import { useAuctionFilterStore } from '@/features/auction-list-filter/store/useAuctionFilterStore';

export default function AuctionListContainer() {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50%가 보일 때 트리거
  });

  const { filters } = useAuctionFilterStore();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useAuctionListQuery(filters);

  const auctions = data?.pages.flatMap((page) => page.data.content) ?? [];

  // 무한 스크롤을 위해 ref와 inView 상태를 체크
  // inView가 true가 되고, 더 이상 페이지가 없다면 fetchNextPage를 호출
  if (inView && hasNextPage && !isFetchingNextPage) {
    fetchNextPage();
  }

  return (
    <>
      <AuctionViewSelector auctions={auctions} />
      <div ref={ref} style={{ padding: '20px', textAlign: 'center' }} />

      {/* 로딩 상태 표시 */}
      {isFetchingNextPage && <p>Loading more...</p>}

      {/* 에러 표시 */}
      {isError && <p>Failed to load more data.</p>}

      {/* 처음 로딩 중 */}
      {isLoading && <p>Loading...</p>}
    </>
  );
}
