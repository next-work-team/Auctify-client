import { delay } from '@/shared/utils/delay';

import { Chat } from '../types';

import { generateMockChatList } from './mock';

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export const getChatList = async (): Promise<{
  status: number;
  message: string;
  data: Chat[];
}> => {
  if (USE_MOCK) {
    await delay(500);
    return generateMockChatList();
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/chatRoom`,
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('[getChatList] Error:', error);

    // 실제 API 실패 시, 테스트용 목 데이터로 대체
    await delay(500);
    return generateMockChatList(); // API 실패 시 목 데이터 반환
  }
};
