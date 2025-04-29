import { Heart } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

export default function LikeAuctionGoods({ isLike }: { isLike: boolean }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
    >
      <Heart className={cn('h-4 w-4', isLike && 'fill-red-400')} />
    </Button>
  );
}
