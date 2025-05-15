'use client';

import { useState } from 'react';

import ChatList from '@/pages/chat-list/ui/ChatList';

function ChatLayout({ children }: { children: React.ReactNode }) {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  return (
    <div className="container h-full flex flex-col sm:flex-row gap-2 p-4">
      {/* 좌측 채팅 리스트 */}
      <ChatList
        selectedChatId={selectedChatId}
        onChatSelect={(chatId) => {
          setSelectedChatId(chatId);
        }}
      />
      {/* 오른쪽 채팅 상세 or 빈 공간 */}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default ChatLayout;
