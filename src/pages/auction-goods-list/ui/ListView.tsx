import React from 'react';

import { AuctionGoods } from '@/entities/auction-goods/models/types';

import { AuctionGoodsListItem } from './AuctionGoodsListItem';

export default function ListView({
  auctionGoods,
}: {
  auctionGoods: AuctionGoods[];
}) {
  return (
    <div className="space-y-4">
      {auctionGoods.map((auctionGood) => (
        <AuctionGoodsListItem
          key={auctionGood.id}
          id={auctionGood.id}
          title={auctionGood.name}
          currentBid={auctionGood.firstPrice}
          image={''}
          timeLeft="7시간"
          bids={10}
          category={'신발'}
          seller={'강동욱'}
          condition={auctionGood.status}
        />
      ))}
    </div>
  );
}
