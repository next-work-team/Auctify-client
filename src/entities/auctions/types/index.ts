export interface Auction {
  id: string;
  title: string;
  currentBid: number;
  image: string;
  timeLeft: string;
  bidCount: number;
  category: string;
  condition: string;
  seller: string;
  isLike: boolean;
}
