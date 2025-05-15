import { delay } from '@/shared/utils/delay';

import type {
  RegisterAuctionRequest,
  RegisterAuctionResponse,
} from '../types/index';
import { generateMockRegisterAuction } from '../apis/mock';

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export const registerAuction = async (
  data: RegisterAuctionRequest,
): Promise<RegisterAuctionResponse> => {
  if (USE_MOCK) {
    await delay(500);
    return generateMockRegisterAuction(data);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auction`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('[registerAuction] Error:', error);
    await delay(500);
    return generateMockRegisterAuction(data);
  }
};
