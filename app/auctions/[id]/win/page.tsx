import { AuctionsWinPage } from '@/pages/auctions-win';

async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <AuctionsWinPage params={await params} />;
}

export default Page;
