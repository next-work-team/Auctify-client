import { Clock } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shared/ui/Button';
import { Card, CardContent, CardFooter } from '@/shared/ui/Card';
import { ROUTES } from '@/shared/constants';

import { Auction } from '../types';

import LikeAuctionGoods from './LikeAuctionGoods';

export function AuctionCard({
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
    <Card className="overflow-hidden relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrls || 'https://placehold.co/400x300'}
        alt={goodsName}
        width={400}
        height={300}
        className="object-cover w-full aspect-[4/3]"
      />
      <LikeAuctionGoods isLike={isLiked} />
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

      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-1">{goodsName}</h3>
        {/* {seller && (
          <p className="text-xs text-muted-foreground">판매자: {seller}</p>
        )} */}
        <div className="mt-2 flex justify-between items-center">
          <div>
            <p className="text-xs text-muted-foreground">현재 입찰가</p>
            <p className="font-bold">₩{currentBidPrice ?? ' 없음'}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">입찰 수</p>
            <p className="font-medium">{currentBidCount}회</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-xs text-muted-foreground flex items-center">
          <Clock className="mr-1 w-4 h-4" width={24} height={24} />
          <span>{endTime} 남음</span>
        </div>
        <Link href={ROUTES.AUCTIONS.DETAIL(goodsId)}>
          <Button size="sm" variant="secondary">
            상세보기
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
