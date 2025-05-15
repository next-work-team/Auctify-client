import { Chat } from '../types';

export const generateMockChatList = (): {
  status: number;
  message: string;
  data: Chat[];
} => {
  const mockData: Chat[] = [
    {
      id: 1,
      user: {
        id: 'user1',
        name: '김판매자',
        avatar: 'https://example.com/user1.jpg',
      },
      lastMessage: {
        text: '안녕하세요, 빈티지 카메라에 관심 있으신가요?',
        timestamp: '오후 2:30',
        isRead: true,
        isMine: false,
      },
      unreadCount: 0,
      auction: {
        id: 'auction1',
        title: '빈티지 카메라 컬렉션',
      },
    },
    {
      id: 2,
      user: {
        id: 'user2',
        name: '이판매자',
        avatar: 'https://example.com/user2.jpg',
      },
      lastMessage: {
        text: '반갑습니다!',
        timestamp: '오후 3:15',
        isRead: false,
        isMine: true,
      },
      unreadCount: 1,
      auction: {
        id: 'auction2',
        title: '빈티지 시계 컬렉션',
      },
    },
    // 필요한 만큼 데이터 추가
  ];

  return {
    status: 200,
    message: '목 데이터',
    data: mockData,
  };
};
