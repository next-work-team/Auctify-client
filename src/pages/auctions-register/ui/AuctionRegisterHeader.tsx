import PrevLink from '@/widgets/ui/PrevLink';

export default function AuctionRegisterHeader() {
  return (
    <div className="mb-6">
      <PrevLink />
      <h1 className="text-3xl font-bold">경매 등록</h1>
      <p className="text-muted-foreground">
        판매하고 싶은 상품의 정보를 입력하여 경매를 시작하세요.
      </p>
    </div>
  );
}
