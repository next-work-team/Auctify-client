import Link from 'next/link';

import { Badge, Button } from '@/shared/ui';

export default function BannerSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
              >
                실시간 경매 진행중
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                실시간으로 참여하는
                <br />
                특별한 경매 경험
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                지금 바로 다양한 상품의 경매에 참여하고 특별한 아이템을 합리적인
                가격에 만나보세요.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8">
                경매 참여하기
              </Button>
              <Link href="/auction-goods/register">
                <Button size="lg" variant="outline">
                  경매 등록하기
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none hidden lg:block">
            <div className="aspect-video overflow-hidden rounded-xl bg-muted/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/1280x720"
                alt="실시간 경매 플랫폼"
                width={1280}
                height={720}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
