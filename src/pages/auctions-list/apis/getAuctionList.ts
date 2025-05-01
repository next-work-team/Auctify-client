import { Auction } from '@/entities/auctions/types';
import { PaginatedResponse } from '@/shared/types/paginated';
import { AuctionFilter } from '@/features/auction-list-filter/store/useAuctionFilterStore';
import { delay } from '@/shared/utils/delay';

import { generateAuctionList } from './mock';

interface GetAuctionListParams {
  pageParam?: number;
  filters?: AuctionFilter;
}

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export async function getAuctionList({
  pageParam = 1,
}: GetAuctionListParams): Promise<{
  status: number;
  message: string;
  data: PaginatedResponse<Auction>;
}> {
  if (USE_MOCK) {
    await delay(500);
    return Promise.resolve(generateAuctionList(pageParam, 10));
  }

  try {
    const query = new URLSearchParams({
      page: pageParam.toString(),
      size: '10',
      // 필요한 경우 filters도 직렬화하여 추가
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auction/search?${query.toString()}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch auction goods list');
    }

    return response.json();
  } catch (error) {
    console.error('[getAuctionList] Error:', error);

    // API 실패 시 목 데이터 fallback
    await delay(500);
    return Promise.resolve(generateAuctionList(pageParam, 10));
  }
}
