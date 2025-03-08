import { Button } from '@/shared/ui/Button';
import { GoodsCard } from '@/entities/auction-goods';

export default function ClosingSoonAuctionSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            마감 임박 경매
          </h2>
          <p className="text-muted-foreground">
            곧 마감되는 경매를 놓치지 마세요!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GoodsCard
            title="빈티지 카메라 컬렉션"
            image="https://placehold.co/600x400"
            currentBid="520,000"
            bidCount={24}
            timeLeft="01:45:32"
          />
          <GoodsCard
            title="한정판 스니커즈"
            image="https://placehold.co/600x400"
            currentBid="350,000"
            bidCount={18}
            timeLeft="00:32:15"
          />
          <GoodsCard
            title="명품 시계"
            image="https://placehold.co/600x400"
            currentBid="1,250,000"
            bidCount={36}
            timeLeft="02:10:45"
          />
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="gap-1">
            더 많은 라이브 경매 보기
            {/* <ChevronRight className="h-4 w-4" /> */}
          </Button>
        </div>
      </div>
    </section>
  );
}
