'use client';

import { Heart } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

import { useUnlikeAuction } from '../hooks/useUnLikeAuction';
import { useLikeAuction } from '../hooks/useLikeAuction';

export default function LikeAuctionIcon({
  goodsId,
  isLike,
}: {
  goodsId: number;
  isLike: boolean;
}) {
  const { mutate: like } = useLikeAuction();
  const { mutate: unlike } = useUnlikeAuction();

  const handleLikeToggle = (isLiked: boolean, goodsId: number) => {
    if (isLiked) {
      unlike(goodsId, {
        onSuccess: () => alert('좋아요 취소 완료'),
        onError: () => alert('좋아요 취소 실패'),
      });
    } else {
      like(goodsId, {
        onSuccess: () => alert('좋아요 완료'),
        onError: () => alert('좋아요 실패'),
      });
    }
  };

  return (
    <Button
      onClick={() => handleLikeToggle(isLike, goodsId)}
      variant="default"
      size="default"
      className=""
    >
      <Heart className={cn('h-4 w-4', isLike && 'fill-red-400')} />
      좋아요
    </Button>
  );
}
