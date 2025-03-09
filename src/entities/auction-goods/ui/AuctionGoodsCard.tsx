import { Clock, Heart } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shared/ui/Button';
import { Card, CardContent, CardFooter } from '@/shared/ui/Card';

interface AuctionCardProps {
  id: number;
  title: string;
  currentBid: number;
  image: string;
  timeLeft: string;
  bids: number;
  category?: string;
  seller?: string;
}

export default function AuctionGoodsCard({
  id,
  title,
  currentBid,
  image,
  timeLeft,
  bids,
  category,
  seller,
}: AuctionCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-fit h-fit">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || '/https://placehold.co/400x300'}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full aspect-[4/3]"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">찜하기</span>
        </Button>
        {category && (
          <div className="absolute left-2 top-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
            {category}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-1">{title}</h3>
        {seller && (
          <p className="text-xs text-muted-foreground">판매자: {seller}</p>
        )}
        <div className="mt-2 flex justify-between items-center">
          <div>
            <p className="text-xs text-muted-foreground">현재 입찰가</p>
            <p className="font-bold">₩{currentBid}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">입찰 수</p>
            <p className="font-medium">{bids}회</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-xs text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          <span>{timeLeft} 남음</span>
        </div>
        <Link href={`/auction/${id}`}>
          <Button size="sm" variant="secondary">
            입찰하기
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
