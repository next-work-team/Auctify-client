export default function HowToUseSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                경매 이용 방법
              </h2>
              <p className="max-w-[600px] text-muted-foreground">
                Auctify 에서 경매에 참여하고 판매하는 방법을 알아보세요.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">회원가입 및 로그인</h3>
                  <p className="text-sm text-muted-foreground">
                    간단한 회원가입 절차를 통해 Auctify 계정을 만들고
                    로그인하세요.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">입찰 예치금 충전</h3>
                  <p className="text-sm text-muted-foreground">
                    안전한 거래를 위해 입찰 전 예치금을 충전하세요.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">경매 참여 및 입찰</h3>
                  <p className="text-sm text-muted-foreground">
                    원하는 상품을 찾아 실시간으로 입찰에 참여하세요.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">낙찰 및 결제</h3>
                  <p className="text-sm text-muted-foreground">
                    경매 종료 후 낙찰되면 안전한 결제 시스템을 통해 결제를
                    진행하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none hidden lg:block">
            <div className="aspect-video overflow-hidden rounded-xl bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/1280x720"
                alt="경매 이용 방법"
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
