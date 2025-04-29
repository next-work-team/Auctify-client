import { AuctionGoodsDetailPage } from '@/pages/auctions-detail';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <AuctionGoodsDetailPage params={await params} />;
}
