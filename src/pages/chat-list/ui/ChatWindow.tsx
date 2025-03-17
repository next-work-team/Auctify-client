'use client';

import {
  ImageIcon,
  InfoIcon,
  MoreHorizontalIcon,
  SendIcon,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Input } from '@/shared/ui/input';

export default function ChatWindow({
  activeChat,
}: {
  activeChat: string | null;
}) {
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

  const currentChat = chatList.find((chat) => chat.id === activeChat);

  // 채팅 메시지 데이터 (실제로는 서버에서 가져옴)
  const messages = [
    {
      id: 'msg1',
      text: '안녕하세요, 빈티지 카메라에 관심 있으신가요?',
      timestamp: '오후 2:30',
      sender: 'user1',
      isMine: false,
    },
    {
      id: 'msg2',
      text: '네, 정말 멋진 컬렉션이네요. 상태가 어떤가요?',
      timestamp: '오후 2:32',
      sender: 'me',
      isMine: true,
    },
    {
      id: 'msg3',
      text: '모든 카메라는 작동 상태이며, 일부 사용감이 있습니다. 특히 Leica M3는 상태가 매우 좋습니다.',
      timestamp: '오후 2:35',
      sender: 'user1',
      isMine: false,
    },
    {
      id: 'msg4',
      text: '혹시 추가 사진을 볼 수 있을까요?',
      timestamp: '오후 2:40',
      sender: 'me',
      isMine: true,
    },
    {
      id: 'msg5',
      image: '/placeholder.svg?height=200&width=300',
      timestamp: '오후 2:42',
      sender: 'user1',
      isMine: false,
    },
    {
      id: 'msg6',
      image: '/placeholder.svg?height=200&width=300',
      timestamp: '오후 2:42',
      sender: 'user1',
      isMine: false,
    },
    {
      id: 'msg7',
      text: '감사합니다. 정말 좋아 보이네요. 가격 조정이 가능할까요?',
      timestamp: '오후 2:45',
      sender: 'me',
      isMine: true,
    },
    {
      id: 'msg8',
      text: '물론이죠. 어느 정도 생각하고 계신가요?',
      timestamp: '오후 2:47',
      sender: 'user1',
      isMine: false,
    },
  ];

  // 메시지 전송 핸들러
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('message') as HTMLInputElement;

    if (input.value.trim()) {
      // 실제 구현에서는 여기서 메시지를 서버로 전송
      console.log('Sending message:', input.value);
      input.value = '';
    }
  };

  return activeChat ? (
    <div className="border rounded-lg overflow-hidden flex flex-col">
      {/* 채팅 헤더 */}
      <div className="p-3 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={currentChat?.user.avatar}
              alt={currentChat?.user.name}
            />
            <AvatarFallback>{currentChat?.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{currentChat?.user.name}</h3>
            <p className="text-xs text-muted-foreground">
              {currentChat?.auction.title}
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontalIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              프로필 보기
            </DropdownMenuItem>
            <DropdownMenuItem>
              <InfoIcon className="mr-2 h-4 w-4" />
              경매 정보
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              차단하기
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              신고하기
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 메시지 영역 */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] ${
                  message.isMine
                    ? 'bg-primary text-primary-foreground rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                    : 'bg-muted rounded-tl-lg rounded-tr-lg rounded-br-lg'
                }`}
              >
                {message.text ? (
                  <div className="p-3">
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${message.isMine ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                ) : message.image ? (
                  <div className="p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={message.image || '/placeholder.svg'}
                      alt="Shared image"
                      className="rounded-md max-w-full"
                    />
                    <p
                      className={`text-xs p-2 ${message.isMine ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* 메시지 입력 영역 */}
      <div className="p-3 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Button type="button" variant="ghost" size="icon">
            <ImageIcon className="h-5 w-5" />
          </Button>
          <Input
            name="message"
            placeholder="메시지를 입력하세요..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <SendIcon className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  ) : (
    <NoActiveChatWindow />
  );
}

function NoActiveChatWindow() {
  return (
    <div className="border rounded-lg flex flex-col items-center justify-center p-6">
      <UserIcon className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="text-xl font-medium mb-2">대화를 선택하세요</h3>
      <p className="text-center text-muted-foreground mb-6">
        왼쪽 목록에서 대화를 선택하여 메시지를 확인하고 응답하세요.
      </p>
      <Button asChild>
        <Link href="/auction-goods">경매 둘러보기</Link>
      </Button>
    </div>
  );
}
