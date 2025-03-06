import { Clock, Heart, Flame } from 'lucide-react';

import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';
import { Card, CardContent, CardFooter } from '@/shared/ui/Card';

interface GoodsCardProps {
  title: string;
  image: string;
  currentBid: string;
  timeLeft: string;
  bidCount: number;
  hot?: boolean;
}

export default function GoodsCard({
  title,
  image,
  currentBid,
  timeLeft,
  bidCount,
  hot = false,
}: GoodsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-fit h-fit">
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
        {hot && (
          <Badge variant="destructive" className="absolute top-2 left-2 gap-1">
            <Flame className="h-3 w-3" />
            인기
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-1">{title}</h3>
        <div className="mt-2 flex justify-between items-center">
          <div>
            <p className="text-xs text-muted-foreground">현재 입찰가</p>
            <p className="font-bold">₩{currentBid}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{timeLeft}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-xs text-muted-foreground">입찰 {bidCount}회</div>
        <Button size="sm">입찰하기</Button>
      </CardFooter>
    </Card>
  );
}
