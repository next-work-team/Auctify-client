import { useState } from 'react';
import { BarChart4 } from 'lucide-react';

import { Button } from '@/shared/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/Tabs';

import { MyBidComponents } from './MyBidComponents';

interface AuctionItem {
  id: string;
  title: string;
  startPrice: string;
  currentPrice: string;
  endDate: string;
  image: string;
  status: 'active' | 'ended' | 'sold' | 'draft';
  bids: number;
}

export function MyHistorySection() {
  const [filter, setFilter] = useState<string>('all');

  const auctionItems: AuctionItem[] = [
    {
      id: '1',
      title: '빈티지 시계',
      startPrice: '100,000원',
      currentPrice: '150,000원',
      endDate: '2023년 12월 20일',
      image: '/placeholder.svg?height=200&width=200',
      status: 'active',
      bids: 5,
    },
    {
      id: '2',
      title: '게이밍 노트북',
      startPrice: '800,000원',
      currentPrice: '950,000원',
      endDate: '2023년 12월 15일',
      image: '/placeholder.svg?height=200&width=200',
      status: 'active',
      bids: 8,
    },
    {
      id: '3',
      title: '스마트워치',
      startPrice: '150,000원',
      currentPrice: '200,000원',
      endDate: '2023년 12월 1일',
      image: '/placeholder.svg?height=200&width=200',
      status: 'sold',
      bids: 12,
    },
    {
      id: '4',
      title: '미개봉 스니커즈',
      startPrice: '120,000원',
      currentPrice: '120,000원',
      endDate: '미등록',
      image: '/placeholder.svg?height=200&width=200',
      status: 'draft',
      bids: 0,
    },
  ];

  const filteredAuctions =
    filter === 'all'
      ? auctionItems
      : auctionItems.filter((auction) => auction.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">내 경매 내역</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          + 새 경매 등록
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" onClick={() => setFilter('all')}>
              전체
            </TabsTrigger>
            <TabsTrigger value="active" onClick={() => setFilter('active')}>
              진행중
            </TabsTrigger>
            <TabsTrigger value="ended" onClick={() => setFilter('ended')}>
              종료됨
            </TabsTrigger>
            <TabsTrigger value="sold" onClick={() => setFilter('sold')}>
              판매완료
            </TabsTrigger>
            <TabsTrigger value="draft" onClick={() => setFilter('draft')}>
              임시저장
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-4">
          {filteredAuctions.length === 0 ? (
            <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <BarChart4 className="mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="text-lg font-medium">등록한 경매가 없습니다</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                새로운 경매를 등록해보세요!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAuctions.map((auction) => (
                <MyBidComponents key={auction.id} auction={auction} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
