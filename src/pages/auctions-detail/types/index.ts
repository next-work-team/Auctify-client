export interface AuctionDetail {
  goodsId: number;
  goodsName: string;
  goodsDescription: string;
  buyNowPrice: number;
  goodsProcessStatus: 'AWARDED';
  goodsStatus: 'NEW';
  minimumBidAmount: number;
  actionEndTime: Date;
  userId: number;
  category: 'ELECTRONICS';
  currentBidPrice: number;
  imageUrls: string[];
  isLiked: boolean;
}
