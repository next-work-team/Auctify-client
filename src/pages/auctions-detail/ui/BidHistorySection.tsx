'use client';

import { Card, CardContent } from '@/shared/ui';

import { useBidDetailSSE } from '../hooks/useBidDetailSSE';

interface BidHistoryItem {
  nickname: string;
  price: number;
  createdAt: Date;
}

interface BidHistorySectionProps {
  auctionId: number;
  bidHistory: BidHistoryItem[];
}

export default function BidHistorySection({
  auctionId,
  bidHistory: initialBidHistory,
}: BidHistorySectionProps) {
  console.log('🚀 ~ initialBidHistory:', initialBidHistory);
  const { data, isConnected } = useBidDetailSSE(auctionId);

  const bidHistoryData = data?.bidHistory;

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold mb-4">입찰 기록</h3>
          <span
            className={`text-xs ${
              isConnected ? 'text-green-600' : 'text-red-400'
            }`}
          >
            {isConnected ? '실시간 연결됨' : '연결 끊김'}
          </span>
        </div>

        <div className="space-y-3">
          {bidHistoryData?.map((bidHistoryDataItem, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div className="font-medium">{bidHistoryDataItem.nickname}</div>
              <div className="flex gap-4">
                <span>₩{bidHistoryDataItem.price.toLocaleString()}</span>
                <span className="text-muted-foreground">
                  {bidHistoryDataItem.createdAt.toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
