import { delay } from '@/shared/utils/delay';
import { BACKEND_URL } from '@/shared/constants';

import { generateMockRegisterAuction } from '../apis/mock';
import { AuctionRegisterRequest, AuctionRegisterResponse } from '../types';

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export const registerAuction = async (
  payload: AuctionRegisterRequest,
): Promise<AuctionRegisterResponse> => {
  if (USE_MOCK) {
    await delay(500);
    return generateMockRegisterAuction(payload);
  }

  try {
    const response = await fetch(`${BACKEND_URL}/api/auction`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('[registerAuction] Error:', error);
    await delay(500);
    return generateMockRegisterAuction(payload);
  }
};
