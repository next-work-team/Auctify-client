'use client';

import { Card, CardContent } from '@/shared/ui';

import { useBidHistorySSE } from '../hooks/useBidHistorySSE';

interface BidHistoryItem {
  user: string;
  amount: number;
  time: string;
}

interface BidHistorySectionProps {
  auctionId: string;
  bidHistory: BidHistoryItem[]; // API로 받은 초기 데이터
}

export default function BidHistorySection({
  auctionId,
  bidHistory: initialBidHistory,
}: BidHistorySectionProps) {
  const { data, isConnected } = useBidHistorySSE(auctionId, initialBidHistory);

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
          {data.map((bid, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div className="font-medium">{bid.user}</div>
              <div className="flex gap-4">
                <span>₩{bid.amount.toLocaleString()}</span>
                <span className="text-muted-foreground">{bid.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
