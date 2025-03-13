import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AuctionGoodsRegisterHeader() {
  return (
    <div className="mb-6">
      <AuctionGoodsListNavLink />
      <h1 className="text-3xl font-bold mt-2">경매 등록</h1>
      <p className="text-muted-foreground mt-1">
        판매하고 싶은 상품의 정보를 입력하여 경매를 시작하세요.
      </p>
    </div>
  );
}

function AuctionGoodsListNavLink() {
  return (
    <Link
      href="/auction-goods"
      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      경매 목록으로 돌아가기
    </Link>
  );
}
