import React from 'react';

import { AuctionGoodsCard } from '@/entities/auction-goods';

import { AuctionGoods } from '../models/types';

export default function GirdView({
  auctionGoodsList,
}: {
  auctionGoodsList: AuctionGoods[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {auctionGoodsList.map((auctionGoods) => (
        <AuctionGoodsCard key={auctionGoods.id} auctionGoods={auctionGoods} />
      ))}
    </div>
  );
}
