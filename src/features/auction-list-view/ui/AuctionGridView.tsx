import { Auction } from '@/entities/auctions/types';
import { AuctionCard } from '@/entities/auctions/ui/AuctionCard';

export default function AuctionsGridView({
  auctions,
}: {
  auctions: Auction[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {auctions?.map((auction) => (
        <AuctionCard key={auction?.goodsId} auction={auction} />
      ))}
    </div>
  );
}
