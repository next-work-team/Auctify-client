import { ClockIcon, EyeIcon, UsersIcon } from 'lucide-react';

import { useSSE } from '@/shared/hooks/useSSE';

interface AuctionSummaryProps {
  auctionId: number;
  title: string;
  currentBid: number;
  views: number;
  timeLeft: string;
  activeBidders: number;
}

interface AuctionSummarySSEData {
  currentBid: number;
  activeBidders: number;
  timeLeft: string;
}

export default function AuctionSummaryInfo({
  auctionId,
  title,
  currentBid: initialBid,
  views,
  timeLeft: initialTimeLeft,
  activeBidders: initialBidders,
}: AuctionSummaryProps) {
  const { data: sseData, isConnected } = useSSE<AuctionSummarySSEData>({
    url: `/api/sse/auction/${auctionId}/summary`,
    withCredentials: true,
    initialData: {
      currentBid: initialBid,
      activeBidders: initialBidders,
      timeLeft: initialTimeLeft,
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-muted-foreground">현재 입찰가</p>
          <p className="text-3xl font-bold">₩{initialBid.toLocaleString()}</p>
          <p>{sseData?.currentBid.toLocaleString()}</p>
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
          <span>{sseData?.timeLeft}</span>
        </div>
        <div className="flex items-center gap-1">
          <UsersIcon className="h-4 w-4" />
          <span>{initialBidders}명 참여중</span>
          <span>{sseData?.activeBidders}명 참여중</span>
        </div>
      </div>

      {!isConnected && <p>실시간 데이터 연결 중...</p>}
    </div>
  );
}
