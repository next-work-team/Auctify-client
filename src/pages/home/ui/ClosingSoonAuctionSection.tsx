import { Button } from '@/shared/ui/Button';
import { Auction, AuctionCard } from '@/entities/auctions';

export default function ClosingSoonAuctionSection() {
  const auctions: Auction[] = [
    {
      goodsId: 1,
      goodsName: '빈티지 카메라 컬렉션',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 250000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '2025-05-01T14:30:00Z',
      category: 'ELECTRONICS',
      goodsStatus: 'USED',
      currentBidCount: 18,
      isLiked: true,
    },
    {
      goodsId: 2,
      goodsName: '한정판 스니커즈',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 180000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '2025-05-02T12:00:00Z',
      category: 'FASHION',
      goodsStatus: 'NEW',
      currentBidCount: 24,
      isLiked: true,
    },
    {
      goodsId: 3,
      goodsName: '명품 시계',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 1250000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '2025-04-30T20:15:00Z',
      category: 'ELECTRONICS',
      goodsStatus: 'USED',
      currentBidCount: 32,
      isLiked: true,
    },
    {
      goodsId: 4,
      goodsName: '아트 프린트 세트',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 85000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '2025-05-03T09:00:00Z',
      category: 'FURNITURE',
      goodsStatus: 'NEW',
      currentBidCount: 7,
      isLiked: true,
    },
    {
      goodsId: 5,
      goodsName: '빈티지 LP 레코드',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 120000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '2025-04-30T22:45:00Z',
      category: 'BOOKS',
      goodsStatus: 'USED',
      currentBidCount: 15,
      isLiked: false,
    },
    {
      goodsId: 6,
      goodsName: '빈티지 LP 레코드',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 120000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '2025-04-30T22:45:00Z',
      category: 'BOOKS',
      goodsStatus: 'USED',
      currentBidCount: 15,
      isLiked: false,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              마감 임박 경매
            </h2>
            <p className="text-muted-foreground">
              곧 마감되는 경매를 놓치지 마세요!
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-1">
              더 많은 라이브 경매 보기
              {/* <ChevronRight className="h-4 w-4" /> */}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <AuctionCard key={auction.goodsId} auction={auction} />
          ))}
        </div>
      </div>
    </section>
  );
}
