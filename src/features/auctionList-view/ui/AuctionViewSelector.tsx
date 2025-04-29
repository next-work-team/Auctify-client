'use client';

import { Auction } from '@/entities/auctions';

import { useViewTypeStore } from '../store/useViewTypeStore';

import AuctionsGridView from './AuctionGridView';
import AuctionListView from './AuctionListView';

function AuctionViewSelector({ auctions }: { auctions: Auction[] }) {
  const { viewType } = useViewTypeStore();

  if (viewType === 'grid') {
    return <AuctionsGridView auctions={auctions} />;
  }

  if (viewType === 'list') {
    return <AuctionListView auctions={auctions} />;
  }
}

export default AuctionViewSelector;
