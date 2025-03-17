'use client';

import { useState } from 'react';

import ChatListPageHeader from './ChatListPageHeader';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

export function ChatListPage() {
  const [activeChat, setActiveChat] = useState<string | null>(null);

  const handleChatSelect = (chatId: string) => {
    setActiveChat(chatId);
    // if (isMobile) {
    //   router.push(`/messages/${chatId}`)
    // }
  };

  return (
    <div className="">
      <ChatListPageHeader />

      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-6 h-[calc(100vh-200px)] min-h-[500px]">
        {/* 채팅 목록 */}
        <ChatList activeChat={activeChat} onChatSelect={handleChatSelect} />

        {/* 채팅 창 */}
        <ChatWindow activeChat={activeChat} />
      </div>
    </div>
  );
}
