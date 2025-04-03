import { ThermometerSun, User } from 'lucide-react';
import Image from 'next/image';

import { Separator } from '@/shared/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/Tabs';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  itemTitle: string;
}

export function TemperatureSection() {
  const reviews: Review[] = [
    {
      id: '1',
      userName: '철수',
      rating: 5,
      comment: '매우 만족함',
      date: '2023년 12월 10일',
      avatar: '/placeholder.svg?height=40&width=40',
      itemTitle: '빈티지 카메라',
    },
  ];

  const getTemperatureColor = (temp: number) => {
    if (temp >= 60) return 'text-red-500';
    if (temp >= 50) return 'text-orange-500';
    if (temp >= 40) return 'text-green-300';
    if (temp >= 36.5) return 'text-blue-500';
    if (temp >= 32) return 'text-blue-700';
    if (temp >= 20) return 'text-blue-900';

    return 'text-blue-300';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">온도 및 리뷰</h2>
        <div className="flex items-center gap-2">
          <ThermometerSun className="h-5 w-5 text-blue-700" />
          <span className="text-sm text-muted-foreground">총 개의 리뷰</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>나의 온도</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <div
              className={`text-6xl font-bold ${getTemperatureColor(temperature)}`}
            >
              {temperature}°
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>리뷰 내역</CardTitle>
            <CardDescription>거래 후 받은 리뷰 내역입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="received" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="received">받은 리뷰</TabsTrigger>
                <TabsTrigger value="sent">작성한 리뷰</TabsTrigger>
              </TabsList>

              <TabsContent value="received" className="mt-4 space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={review.avatar || '/placeholder.svg'}
                            alt={review.userName}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{review.userName}</div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {review.date}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        상품: {review.itemTitle}
                      </p>
                      <p className="mt-1">{review.comment}</p>
                    </div>
                    <Separator className="mt-4" />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="sent" className="mt-4">
                <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                  <User className="mb-4 h-12 w-12 text-muted-foreground" />
                  <h3 className="text-lg font-medium">
                    작성한 리뷰가 없습니다
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    거래 후 상대방에게 리뷰를 작성해보세요!
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
