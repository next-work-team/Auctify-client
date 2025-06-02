export interface AuctionRegisterRequest {
  userId: number;
  goodsName: string;
  goodsDescription: string;
  category: string;
  minimumBidAmount: number;
  goodsStatus: string;
  goodsProcessStatus: string;
  actionEndTime: string;
  buyNowPrice: number;
  image: string[];
}
export interface AuctionRegisterResponse {
  status: number;
  message: string;
  data: {
    goodsId: number;
    goodsName: string;
    goodsDescription: string;
    buyNowPrice: number;
    goodsProcessStatus: string;
    goodsStatus: string;
    minimumBidAmount: number;
    actionEndTime: string;
    userId: number;
    category: string;
    currentBidPrice: number;
    imageUrls: string[];
    isLiked: boolean;
  };
}
