'use client';

import { useState, useEffect } from 'react';
import { Bell, Check, Trash2 } from 'lucide-react';

import { Button } from '@/shared/ui/Button';
import { Tabs, TabsContent } from '@/shared/ui/Tabs';
import { useSSE } from '@/shared/hooks/useSSE';

interface NotificationType {
  id: string;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  type: 'bid' | 'auction' | 'message' | 'system';
}

export function NotificationSection() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // const [notifications, setNotifications] = useState<Notification[]>([
  //   {
  //     id: '1',
  //     title: '새로운 입찰',
  //     message: "귀하의 '빈티지 시계' 상품에 새로운 입찰이 있습니다.",
  //     date: '2023년 12월 10일',
  //     isRead: false,
  //     type: 'bid',
  //   },
  //   {
  //     id: '2',
  //     title: '경매 종료 임박',
  //     message: "귀하의 '게이밍 노트북' 경매가 24시간 후 종료됩니다.",
  //     date: '2023년 12월 9일',
  //     isRead: false,
  //     type: 'auction',
  //   },
  //   {
  //     id: '3',
  //     title: '새로운 메시지',
  //     message: '김철수님으로부터 새로운 메시지가 도착했습니다.',
  //     date: '2023년 12월 8일',
  //     isRead: true,
  //     type: 'message',
  //   },
  //   {
  //     id: '4',
  //     title: '시스템 알림',
  //     message: '서비스 이용약관이 업데이트되었습니다. 확인해주세요.',
  //     date: '2023년 12월 5일',
  //     isRead: true,
  //     type: 'system',
  //   },
  // ]);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const { data } = useSSE<NotificationType>({
    url: `${apiUrl}/sse/`,
    initialData: null,
    withCredentials: true,
  });

  useEffect(() => {
    if (data) {
      setNotifications((prev) => [data, ...prev]);
    }
  }, [data]);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, isRead: true })),
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id),
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">알림 내역</h2>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-blue-700" />
          <span className="text-sm text-muted-foreground">
            읽지 않은 알림 {unreadCount}개
          </span>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center ">
          <Button
            variant="outline" //샤드씨엔 옵션
            size="sm"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <Check className="mr-2 h-4 w-4" />
            모두 읽음 표시
          </Button>
        </div>

        <TabsContent value="all" className="mt-4">
          {notifications.length === 0 ? (
            <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <Bell className="mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="text-lg font-medium">알림이 없습니다</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                새로운 알림이 도착하면 이곳에 표시됩니다.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`rounded-lg border p-4 transition-colors ${
                    notification.isRead ? 'bg-white' : 'bg-blue-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium">{notification.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {notification.date}
                      </span>
                      <div className="flex gap-1">
                        {!notification.isRead && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">{notification.message}</p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
