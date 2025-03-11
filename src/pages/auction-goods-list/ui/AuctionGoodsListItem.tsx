import Link from 'next/link';
import { Clock, Heart } from 'lucide-react';

import { Button } from '@/shared/ui';

interface AuctionListItemProps {
  id: number;
  title: string;
  currentBid: number;
  image: string;
  timeLeft: string;
  bids: number;
  category: string;
  seller: string;
  condition: string;
}

export function AuctionGoodsListItem({
  id,
  title,
  currentBid,
  image,
  timeLeft,
  bids,
  category,
  seller,
  condition,
}: AuctionListItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
      <div className="relative w-full sm:w-48 h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">찜하기</span>
        </Button>
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
              <p className="font-medium">{bids}회</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-sm">
            <Clock className="mr-1 h-4 w-4 text-amber-500" />
            <span className="font-medium">{timeLeft} 남음</span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Link href={`/auction/${id}`} className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full">
                상세 보기
              </Button>
            </Link>
            <Link href={`/auction/${id}`} className="w-full sm:w-auto">
              <Button size="sm" className="w-full">
                입찰하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
