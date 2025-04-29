import { Auction } from '@/entities/auctions/types';
import { PaginatedResponse } from '@/shared/types/paginated';
import { AuctionFilter } from '@/features/auction-list-filter/store/useAuctionFilterStore';

import { generateAuctionList } from './mock';

interface GetAuctionListParams {
  pageParam?: number;
  filters?: AuctionFilter;
}

export async function getAuctionList({
  pageParam = 1,
}: GetAuctionListParams): Promise<{
  status: number;
  message: string;
  data: PaginatedResponse<Auction>;
}> {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/auction/search?page=${pageParam}&size=10`,
  // );

  // if (!response.ok) {
  //   throw new Error('Failed to fetch auction goods list');
  // }

  // 실제 응답
  // return response.json();

  // mock 응답
  return Promise.resolve(generateAuctionList(pageParam, 10));
}
