import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/Tabs';
import { AuctionGoodsCard } from '@/entities/auction-goods';

export default function PopularAuctionSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            인기 경매
          </h2>
          <p className="text-muted-foreground">
            많은 관심을 받고 있는 인기 경매 상품들
          </p>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="electronics">전자기기</TabsTrigger>
            <TabsTrigger value="fashion">패션</TabsTrigger>
            <TabsTrigger value="collectibles">수집품</TabsTrigger>
            <TabsTrigger value="art">예술작품</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AuctionGoodsCard
                id={1}
                title="애플 맥북 프로 M2"
                image="https://placehold.co/400x300"
                currentBid={1450000}
                timeLeft="2일 4시간"
                bids={32}
              />
              <AuctionGoodsCard
                id={2}
                title="빈티지 LP 레코드 세트"
                image="https://placehold.co/400x300"
                currentBid={280000}
                timeLeft="1일 12시간"
                bids={18}
              />
              <AuctionGoodsCard
                id={3}
                title="명품 가죽 핸드백"
                image="https://placehold.co/400x300"
                currentBid={850000}
                timeLeft="3일 8시간"
                bids={45}
              />
              <AuctionGoodsCard
                id={4}
                title="한정판 스니커즈"
                image="https://placehold.co/400x300"
                currentBid={320000}
                timeLeft="5시간"
                bids={12}
              />
              <AuctionGoodsCard
                id={5}
                title="디자이너 가구"
                image="https://placehold.co/400x300"
                currentBid={650000}
                timeLeft="4일 2시간"
                bids={32}
              />
              <AuctionGoodsCard
                id={6}
                title="골동품 시계"
                image="https://placehold.co/400x300"
                currentBid={420000}
                timeLeft="2일 18시간"
                bids={28}
              />
              <AuctionGoodsCard
                id={7}
                title="게이밍 PC 세트"
                image="https://placehold.co/400x300"
                currentBid={1850000}
                timeLeft="1일 6시간"
                bids={37}
              />
              <AuctionGoodsCard
                id={8}
                title="미술 작품"
                image="https://placehold.co/400x300"
                currentBid={750000}
                timeLeft="5일 10시간"
                bids={15}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
