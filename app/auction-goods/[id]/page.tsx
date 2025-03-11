import { AuctionGoodsDetailPage } from '@/pages/auction-goods-detail';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <AuctionGoodsDetailPage params={await params} />;
}
