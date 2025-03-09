export interface AuctionGoods {
  id: number;
  /**
   * 물품명
   */
  name: string;
  /**
   * 최초 가격
   */
  firstPrice: number;
  /**
   * 경매품 설명
   */
  description: string;
  /**
   * 즉시구매가
   */
  buyNowPrice: number;
  /**
   * 경매 진행 상태
   */
  processStatus: string;
  /**
   * 경매품 상태
   */
  status: string;
  /**
   * 최소 입찰 금액
   */
  minimumBidAmount: number;
  /**
   * 경매 시작 시간
   */
  auctionStartTime: Date;
  /**
   * 경매 종료 시간
   */
  auctionEndTime: Date;
}
