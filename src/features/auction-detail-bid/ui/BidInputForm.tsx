import { useState } from 'react';

import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/input';

import { useBidAuction } from '../hooks/useBidAuction';

export function BidInputForm({
  minBidIncrement,
  currentBid,
  goodsId,
}: {
  minBidIncrement: number;
  currentBid: number;
  goodsId: number;
}) {
  const minPrice = currentBid + minBidIncrement;
  const [price, setPrice] = useState(minPrice);

  const { mutate, isPending } = useBidAuction(goodsId);

  const handleBid = (bidPrice: number) => {
    if (bidPrice < minPrice) {
      alert(`최소 입찰가는 ₩${minPrice.toLocaleString()}입니다.`);
      return;
    }

    mutate(
      { bidPrice },
      {
        onSuccess: (res) => {
          alert(`₩${res.data.bidPrice.toLocaleString()} 입찰 성공!`);
        },
        onError: () => {
          alert('입찰 실패. 다시 시도해주세요.');
        },
      },
    );
  };

  return (
    <div className="pt-4 border-t">
      <p className="text-sm text-muted-foreground mb-2">
        입찰하기 (최소 ₩{minPrice.toLocaleString()})
      </p>
      <div className="flex gap-2">
        <Input
          type="number"
          min={minPrice}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="flex-1"
        />
        <Button
          onClick={() => handleBid(price)}
          disabled={isPending || price < minPrice}
        >
          {isPending ? '입찰 중...' : '입찰'}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        * 입찰 시 자동으로 최소 입찰 단위로 증가해야 합니다.
      </p>
    </div>
  );
}
