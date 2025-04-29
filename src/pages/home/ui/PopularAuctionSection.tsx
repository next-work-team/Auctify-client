import { Auction, AuctionCard } from '@/entities/auctions';
import { Button } from '@/shared/ui';

export default function PopularAuctionSection() {
  const auctions: Auction[] = [
    {
      goodsId: 1,
      goodsName: '빈티지 카메라 컬렉션',
      goodsProcessStatus: 'BIDDING', // 상태는 예시로 'BIDDING'을 설정
      currentBidPrice: 250000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '2시간 30분', // 나중에 시간 포맷을 처리할 필요 있음
      category: 'ELECTRONICS', // '전자제품'을 'ELECTRONICS'로 변환
      goodsStatus: 'USED', // '중고'를 'USED'로 변환
      currentBidCount: 18,
      isLiked: true,
    },
    {
      goodsId: 2,
      goodsName: '한정판 스니커즈',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 180000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '1일 4시간',
      category: 'FASHION', // '패션'을 'FASHION'으로 변환
      goodsStatus: 'NEW', // '새제품'을 'NEW'로 변환
      currentBidCount: 24,
      isLiked: true,
    },
    {
      goodsId: 3,
      goodsName: '명품 시계',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 1250000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '5시간 15분',
      category: 'ELECTRONICS', // '쥬얼리' -> 'ELECTRONICS'로 변경
      goodsStatus: 'USED', // '중고'를 'USED'로 변환
      currentBidCount: 32,
      isLiked: true,
    },
    {
      goodsId: 4,
      goodsName: '아트 프린트 세트',
      goodsProcessStatus: 'BIDDING',
      currentBidPrice: 85000,
      imageUrls: 'https://placehold.co/400x300',
      endTime: '3일 12시간',
      category: 'ELECTRONICS', // 예술/미술 -> 'ELECTRONICS'로 변환 (변경 필요)
      goodsStatus: 'NEW', // '새제품'을 'NEW'로 변환
      currentBidCount: 7,
      isLiked: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              인기 경매
            </h2>
            <p className="text-muted-foreground">
              많은 관심을 받고 있는 인기 경매 상품들
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-1">
              더 많은 인기 경매 보기
              {/* <ChevronRight className="h-4 w-4" /> */}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {auctions.map((auction) => (
            <AuctionCard key={auction.goodsId} auction={auction} />
          ))}
        </div>
      </div>
    </section>
  );
}
