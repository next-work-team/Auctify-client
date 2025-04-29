import Link from 'next/link';
import { Clock } from 'lucide-react';

import { Button } from '@shared/ui';
import { Auction } from '@entities/auctions/types';
import LikeAuctionGoods from '@entities/auctions/ui/LikeAuctionGoods';
import { ROUTES } from '@/shared/constants';

export function AuctionListItem({
  auction: {
    goodsId,
    goodsName,
    category,
    goodsStatus,
    isLiked,
    currentBidPrice,
    currentBidCount,
    endTime,
    imageUrls,
  },
}: {
  auction: Auction;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
      <div className="relative w-full sm:w-48 h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrls || '/placeholder.svg'}
          alt={goodsName}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-2 top-2 flex gap-x-2">
          {category && (
            <div className="bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
              {category}
            </div>
          )}
          {goodsStatus && (
            <div className="bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
              {goodsStatus}
            </div>
          )}
        </div>
        <LikeAuctionGoods isLike={isLiked} />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-muted px-2 py-0.5 rounded">
                {category}
              </span>
              <span className="text-xs bg-muted px-2 py-0.5 rounded">
                {goodsStatus}
              </span>
            </div>
            <h3 className="font-semibold text-lg">{goodsName}</h3>
            {/* <p className="text-sm text-muted-foreground">판매자: {seller}</p> */}
          </div>

          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-1">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">현재 입찰가</p>
              <p className="font-bold text-lg">
                {currentBidPrice.toLocaleString()}원
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">입찰 수</p>
              <p className="font-medium">{currentBidCount}회</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-sm">
            <Clock className="mr-1 h-4 w-4 text-amber-500" />
            <span className="font-medium">{endTime} 남음</span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Link
              href={ROUTES.AUCTIONS.DETAIL(goodsId)}
              className="w-full sm:w-auto"
            >
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
