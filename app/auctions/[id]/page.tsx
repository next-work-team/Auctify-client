import { AuctionsDetailPage } from '@/pages/auctions-detail';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <AuctionsDetailPage params={await params} />;
}
