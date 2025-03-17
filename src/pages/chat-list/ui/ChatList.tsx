import { SearchIcon, UserIcon } from 'lucide-react';
import { useState } from 'react';

import { Badge, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Input } from '@/shared/ui/input';
import { ScrollArea } from '@/shared/ui/scroll-area';

export default function ChatList({
  activeChat,
  onChatSelect,
}: {
  activeChat: string | null;
  onChatSelect: (chatId: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const chatList = [
    {
      id: 'chat1',
      user: {
        id: 'user1',
        name: '김판매자',
        avatar: '/placeholder.svg?height=40&width=40',
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
      id: 'chat2',
      user: {
        id: 'user2',
        name: '이구매자',
        avatar: '/placeholder.svg?height=40&width=40',
      },
      lastMessage: {
        text: '네, 배송은 언제 시작되나요?',
        timestamp: '오전 11:15',
        isRead: false,
        isMine: false,
      },
      unreadCount: 2,
      auction: {
        id: 'auction2',
        title: '한정판 스니커즈',
      },
    },
    {
      id: 'chat3',
      user: {
        id: 'user3',
        name: '박경매',
        avatar: '/placeholder.svg?height=40&width=40',
      },
      lastMessage: {
        text: '가격 조정이 가능할까요?',
        timestamp: '어제',
        isRead: true,
        isMine: true,
      },
      unreadCount: 0,
      auction: {
        id: 'auction3',
        title: '명품 시계',
      },
    },
    {
      id: 'chat4',
      user: {
        id: 'user4',
        name: '최컬렉터',
        avatar: '/placeholder.svg?height=40&width=40',
      },
      lastMessage: {
        text: '상품 상태가 정말 좋네요. 구매하고 싶습니다.',
        timestamp: '2일 전',
        isRead: true,
        isMine: false,
      },
      unreadCount: 0,
      auction: {
        id: 'auction4',
        title: '아트 프린트 세트',
      },
    },
  ];

  // 필터링된 채팅 목록
  const filteredChats = chatList.filter(
    (chat) =>
      chat.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.auction.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col">
      <div className="p-3 border-b">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="이름 또는 경매로 검색..."
            className="pl-8"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="flex-1 flex flex-col">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">
            전체
          </TabsTrigger>
          <TabsTrigger value="unread" className="flex-1">
            안 읽은 메시지
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1">
          <TabsContent value="all" className="m-0 p-0 h-full">
            <div className="divide-y">
              {filteredChats.length > 0 ? (
                filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex items-center gap-3 p-3 hover:bg-muted transition-colors cursor-pointer ${
                      activeChat === chat.id ? 'bg-muted' : ''
                    }`}
                    onClick={() => onChatSelect(chat.id)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage
                          src={chat.user.avatar}
                          alt={chat.user.name}
                        />
                        <AvatarFallback>
                          {chat.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {chat.unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                          {chat.unreadCount}
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium truncate">
                          {chat.user.name}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {chat.lastMessage.timestamp}
                        </span>
                      </div>
                      <p
                        className={`text-sm truncate ${chat.unreadCount > 0 ? 'font-medium' : 'text-muted-foreground'}`}
                      >
                        {chat.lastMessage.isMine && '나: '}
                        {chat.lastMessage.text}
                      </p>
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {chat.auction.title}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <UserIcon className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">검색 결과가 없습니다</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="unread" className="m-0 p-0 h-full">
            <div className="divide-y">
              {filteredChats.filter((chat) => chat.unreadCount > 0).length >
              0 ? (
                filteredChats
                  .filter((chat) => chat.unreadCount > 0)
                  .map((chat) => (
                    <div
                      key={chat.id}
                      className={`flex items-center gap-3 p-3 hover:bg-muted transition-colors cursor-pointer ${
                        activeChat === chat.id ? 'bg-muted' : ''
                      }`}
                      onClick={() => onChatSelect(chat.id)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage
                            src={chat.user.avatar}
                            alt={chat.user.name}
                          />
                          <AvatarFallback>
                            {chat.user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                          {chat.unreadCount}
                        </Badge>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium truncate">
                            {chat.user.name}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {chat.lastMessage.timestamp}
                          </span>
                        </div>
                        <p className="text-sm font-medium truncate">
                          {chat.lastMessage.isMine && '나: '}
                          {chat.lastMessage.text}
                        </p>
                        <p className="text-xs text-muted-foreground truncate mt-1">
                          {chat.auction.title}
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="text-center py-8">
                  <UserIcon className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">
                    안 읽은 메시지가 없습니다
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
