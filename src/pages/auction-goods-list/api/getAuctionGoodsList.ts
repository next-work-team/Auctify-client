import { AuctionGoods } from '@/entities/auction-goods/models/types';

export async function getAuctionGoodsList() {
  const response = await fetch(`http://localhost:3000/api/auction-goods`);

  if (!response.ok) {
    throw new Error('Failed to fetch auction goods list');
  }

  return response.json() as Promise<AuctionGoods[]>;
}
