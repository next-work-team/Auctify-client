import { ClockIcon, EyeIcon, UsersIcon } from 'lucide-react';

import { useBidDetailSSE } from '../hooks/useBidDetailSSE';

interface AuctionSummaryProps {
  auctionId: number;
  title: string;
  currentBid: number;
  views: number;
  timeLeft: string;
  activeBidders: number;
}

export default function AuctionSummaryInfo({
  auctionId,
  title,
  currentBid: initialBid,
  views,
  timeLeft: initialTimeLeft,
  activeBidders: initialBidders,
}: AuctionSummaryProps) {
  const { data: sseData, isConnected } = useBidDetailSSE(auctionId);
  console.log('🚀 ~ sseData:', sseData);

  const auctionSummaryData = sseData?.auctionSummary;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-muted-foreground">현재 입찰가</p>
          <p className="text-3xl font-bold">₩{initialBid?.toLocaleString()}</p>
          <p>{auctionSummaryData?.maxBidPrice?.toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <EyeIcon className="h-4 w-4" />
          <span>{views}회 조회</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-amber-500">
          <ClockIcon className="h-5 w-5" />
          <span className="font-medium">{initialTimeLeft} 남음</span>
          <span>{auctionSummaryData?.remainingTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <UsersIcon className="h-4 w-4" />
          <span>{initialBidders}명 참여중</span>
          <span>{auctionSummaryData?.participantsCount}명 참여중</span>
        </div>
      </div>

      {!isConnected && <p>실시간 데이터 연결 중...</p>}
    </div>
  );
}
