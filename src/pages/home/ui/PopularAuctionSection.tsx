import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/Tabs';
import { GoodsCard } from '@/entities/goods';

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
              <GoodsCard
                title="애플 맥북 프로 M2"
                image="https://placehold.co/400x300"
                currentBid="1,450,000"
                timeLeft="2일 4시간"
                bidCount={32}
              />
              <GoodsCard
                title="빈티지 LP 레코드 세트"
                image="https://placehold.co/400x300"
                currentBid="280,000"
                timeLeft="1일 12시간"
                bidCount={18}
              />
              <GoodsCard
                title="명품 가죽 핸드백"
                image="https://placehold.co/400x300"
                currentBid="850,000"
                timeLeft="3일 8시간"
                bidCount={45}
              />
              <GoodsCard
                title="한정판 스니커즈"
                image="https://placehold.co/400x300"
                currentBid="320,000"
                timeLeft="5시간"
                bidCount={64}
                hot={true}
              />
              <GoodsCard
                title="디자이너 가구"
                image="https://placehold.co/400x300"
                currentBid="650,000"
                timeLeft="4일 2시간"
                bidCount={12}
              />
              <GoodsCard
                title="골동품 시계"
                image="https://placehold.co/400x300"
                currentBid="420,000"
                timeLeft="2일 18시간"
                bidCount={28}
              />
              <GoodsCard
                title="게이밍 PC 세트"
                image="https://placehold.co/400x300"
                currentBid="1,850,000"
                timeLeft="1일 6시간"
                bidCount={37}
                hot={true}
              />
              <GoodsCard
                title="미술 작품"
                image="https://placehold.co/400x300"
                currentBid="750,000"
                timeLeft="5일 10시간"
                bidCount={15}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
