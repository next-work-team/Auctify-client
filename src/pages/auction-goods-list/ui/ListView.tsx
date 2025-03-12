import React from 'react';

import { AuctionGoods } from '../models/types';

import { AuctionGoodsListItem } from './AuctionGoodsListItem';

export default function ListView({
  auctionGoodsList,
}: {
  auctionGoodsList: AuctionGoods[];
}) {
  return (
    <div className="space-y-4">
      {auctionGoodsList.map((auctionGoods) => (
        <AuctionGoodsListItem
          key={auctionGoods.id}
          auctionGoods={auctionGoods}
        />
      ))}
    </div>
  );
}
