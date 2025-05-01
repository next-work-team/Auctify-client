export interface AuctionDetail {
  goodsId: number;
  goodsName: string;
  goodsDescription: string;
  buyNowPrice: number;
  goodsProcessStatus: 'AWARDED' | 'PROGRESS' | 'EXPIRED';
  goodsStatus: 'NEW' | 'USED';
  minimumBidAmount: number;
  actionEndTime: string;
  userId: number;
  category: 'ELECTRONICS' | 'FASHION' | 'BOOKS' | 'ETC';
  currentBidPrice: number;
  imageUrls: string[];
  isLiked: boolean;
}
