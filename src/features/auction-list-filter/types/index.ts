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

export type SortingMethod =
  | 'ending-soon'
  | 'newest'
  | 'price-low'
  | 'price-high'
  | 'popular';
