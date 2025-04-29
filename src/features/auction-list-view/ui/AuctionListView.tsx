import { AuctionListItem } from '@/entities/auctions/ui/AuctionListItem';
import { Auction } from '@/entities/auctions';

function AuctionListView({ auctions }: { auctions: Auction[] }) {
  return (
    <div className="space-y-4">
      {auctions?.map((auction) => (
        <AuctionListItem key={auction.goodsId} auction={auction} />
      ))}
    </div>
  );
}

export default AuctionListView;
