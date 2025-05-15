export interface Chat {
  id: number;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  lastMessage: {
    text: string;
    timestamp: string; // 예: '오후 2:30'
    isRead: boolean;
    isMine: boolean;
  };
  unreadCount: number;
  auction: {
    id: string;
    title: string;
  };
}
