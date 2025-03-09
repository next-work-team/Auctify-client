import React from 'react';

import { AuctionGoodsCard } from '@/entities/auction-goods';
import { AuctionGoods } from '@/entities/auction-goods/models/types';

export default function GirdView({
  auctionGoods,
}: {
  auctionGoods: AuctionGoods[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {auctionGoods.map((auction) => (
        <AuctionGoodsCard
          key={auction.id}
          id={auction.id}
          title={auction.name}
          currentBid={auction.buyNowPrice}
          image={'https://placehold.co/400x300'}
          timeLeft={'1시간'}
          bids={77}
          category={'의류'}
          seller={'강동욱'}
        />
      ))}
    </div>
  );
}
