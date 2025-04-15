import { Auction } from '@entities/auctions/types';

import { AuctionListItem } from './AuctionListItem';

export default function AuctionsList({ auctions }: { auctions: Auction[] }) {
  return (
    <div className="space-y-4">
      {auctions.map((auction) => (
        <AuctionListItem key={auction.id} auction={auction} />
      ))}
    </div>
  );
}
