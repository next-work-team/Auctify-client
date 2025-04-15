import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Button } from '@shared/ui';
import { Auction } from '@entities/auctions/types';
import LikeAuctionGoods from '@entities/auctions/ui/LikeAuctionGoods';

export function AuctionListItem({
  auction: {
    image,
    title,
    category,
    condition,
    isLike,
    seller,
    currentBid,
    bidCount,
    timeLeft,
    id,
  },
}: {
  auction: Auction;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
      <div className="relative w-full sm:w-48 h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-2 top-2 flex gap-x-2">
          {category && (
            <div className="bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
              {category}
            </div>
          )}
          {condition && (
            <div className="bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
              {condition}
            </div>
          )}
        </div>
        <LikeAuctionGoods isLike={isLike} />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-muted px-2 py-0.5 rounded">
                {category}
              </span>
              <span className="text-xs bg-muted px-2 py-0.5 rounded">
                {condition}
              </span>
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">판매자: {seller}</p>
          </div>

          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-1">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">현재 입찰가</p>
              <p className="font-bold text-lg">{currentBid}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">입찰 수</p>
              <p className="font-medium">{bidCount}회</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-sm">
            <Clock className="mr-1 h-4 w-4 text-amber-500" />
            <span className="font-medium">{timeLeft} 남음</span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Link href={`/auction-goods/${id}`} className="w-full sm:w-auto">
              <Button variant="default" size="sm" className="w-full">
                상세 보기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
