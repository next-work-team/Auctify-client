import { delay } from '@/shared/utils/delay';

import { AuctionDetail } from '../types';

import { generateMockAuctionDetail } from './mock';

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export const getAuctionDetail = async (
  goodsId: number,
): Promise<{
  status: number;
  message: string;
  data: AuctionDetail;
}> => {
  if (USE_MOCK) {
    await delay(500);
    return generateMockAuctionDetail(goodsId);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auction/${goodsId}`,
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('[getAuctionDetail] Error:', error);

    // 실제 API 실패 시, 테스트용 목 데이터로 대체
    await delay(500);
    return generateMockAuctionDetail(goodsId);
  }
};
