import { AuctionGoodsCard } from '@/entities/auction-goods';
import { Button } from '@/shared/ui';

export default function PopularAuctionSection() {
  const auctionGoodsList = [
    {
      id: '1',
      title: '빈티지 카메라 컬렉션',
      currentBid: 250000,
      image: 'https://placehold.co/400x300',
      timeLeft: '2시간 30분',
      bidCount: 18,
      category: '전자제품',
      condition: '중고',
      seller: '카메라마스터',
      isLike: true,
    },
    {
      id: '2',
      title: '한정판 스니커즈',
      currentBid: 180000,
      image: 'https://placehold.co/400x300',
      timeLeft: '1일 4시간',
      bidCount: 24,
      category: '패션',
      condition: '새제품',
      seller: '슈즈컬렉터',
      isLike: true,
    },
    {
      id: '3',
      title: '명품 시계',
      currentBid: 1250000,
      image: 'https://placehold.co/400x300',
      timeLeft: '5시간 15분',
      bidCount: 32,
      category: '쥬얼리',
      condition: '중고',
      seller: '타임마스터',
      isLike: true,
    },
    {
      id: '4',
      title: '아트 프린트 세트',
      currentBid: 85000,
      image: 'https://placehold.co/400x300',
      timeLeft: '3일 12시간',
      bidCount: 7,
      category: '예술/미술',
      condition: '새제품',
      seller: '아트갤러리',
      isLike: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
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
          {auctionGoodsList.map((auctionGoods) => (
            <AuctionGoodsCard
              key={auctionGoods.id}
              auctionGoods={auctionGoods}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
