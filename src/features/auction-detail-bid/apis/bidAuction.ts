import { delay } from '@/shared/utils/delay';

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

interface BidAuctionParams {
  goodsId: number;
  bidPrice: number;
}

interface BidAuctionResponse {
  status: number;
  message: string;
  data: {
    bidHistoryId: number;
    goodsId: number;
    goodsName: string;
    cancelFlag: boolean;
    goodsProcessStatus: string;
    imageUrls: string;
    bidPrice: number;
    bidMaxPrice: number;
  };
}

export const bidAuction = async ({
  goodsId,
  bidPrice,
}: BidAuctionParams): Promise<BidAuctionResponse> => {
  if (USE_MOCK) {
    await delay(300);
    return {
      status: 0,
      message: '입찰 성공 (mock)',
      data: {
        bidHistoryId: Math.floor(Math.random() * 100000),
        goodsId,
        goodsName: 'Apple MacBook Pro 14"',
        cancelFlag: false,
        goodsProcessStatus: 'AWARDED',
        imageUrls: 'https://via.placeholder.com/600x400.png?text=MacBook+Pro',
        bidPrice,
        bidMaxPrice: bidPrice,
      },
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auction/${goodsId}/bid`,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ goodsId, bidPrice }),
      },
    );

    if (!response.ok) {
      throw new Error(`입찰 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[bidAuction] Error:', error);
    throw error;
  }
};
