export type Category =
  | 'electronics'
  | 'fashion'
  | 'collectibles'
  | 'art'
  | 'jewelry'
  | 'home'
  | 'sports';

export type Condition = 'new' | 'like-new' | 'used-good' | 'used-fair';

export type AuctionStatus =
  | 'ending-soon'
  | 'newly-listed'
  | 'hot-items'
  | 'buy-now';

export interface Filter {
  categories: Category[];
  priceRange: { min: number; max: number | null };
  condition: Condition[];
  auctionStatus: AuctionStatus[];
}

export interface AuctionGoods {
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

export type SortingMethod =
  | 'ending-soon'
  | 'newest'
  | 'price-low'
  | 'price-high'
  | 'popular';
