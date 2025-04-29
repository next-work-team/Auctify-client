export interface Auction {
  goodsId: number;
  goodsName: string;
  goodsProcessStatus: 'AWARDED' | 'BIDDING' | 'CLOSED';
  currentBidPrice: number;
  imageUrls: string;
  endTime: string;
  category: 'ELECTRONICS' | 'FASHION' | 'BOOKS' | 'FURNITURE';
  goodsStatus: 'NEW' | 'USED';
  currentBidCount: number;
  isLiked: boolean;
}
