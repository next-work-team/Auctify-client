import { ClockIcon, EyeIcon, UsersIcon } from 'lucide-react';

export default function AuctionSummaryInfo({
  title,
  currentBid,
  views,
  timeLeft,
  activeBidders,
}: {
  goodsId: number;
  title: string;
  currentBid: number;
  views: number;
  timeLeft: string;
  activeBidders: number;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-muted-foreground">현재 입찰가</p>
          <p className="text-3xl font-bold">₩{currentBid.toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <EyeIcon className="h-4 w-4" />
          <span>{views}회 조회</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-amber-500">
          <ClockIcon className="h-5 w-5" />
          <span className="font-medium">{timeLeft} 남음</span>
        </div>
        <div className="flex items-center gap-1">
          <UsersIcon className="h-4 w-4" />
          <span>{activeBidders}명 참여중</span>
        </div>
      </div>
    </div>
  );
}
