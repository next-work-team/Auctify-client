import AuctionGoodsImageGallerySection from './AuctionGoodsImageGallerySection';
import AuctionGoodsInfoSection from './AuctionGoodsInfoSection';
import BidActionSection from './BidActionSection';
import BidHistorySection from './BidHistorySection';
import HomeNavLink from './HomeNavLink';

export function AuctionGoodsDetailPage({ params }: { params: { id: string } }) {
  // mock 데이터
  const auction = {
    id: params.id,
    title: '빈티지 카메라 컬렉션',
    description:
      '1960년대부터 1980년대까지의 빈티지 카메라 컬렉션입니다. 모든 카메라는 작동 상태이며 컬렉터 아이템으로 가치가 있습니다. 이 컬렉션에는 Leica, Canon, Nikon 등 유명 브랜드의 카메라가 포함되어 있습니다.',
    currentBid: 250000,
    minBidIncrement: 10000,
    timeLeft: '2시간 30분',
    activeBidders: 18,
    views: 342,
    seller: {
      name: '카메라마스터',
      rating: 4.9,
      sales: 156,
    },
    images: [
      'https://images.unsplash.com/reserve/HwHDcyQARvK6rFF84VT8_15154010855_3ac36f3e56_o.jpg?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1667538962342-2d9937f014d9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1514060967642-aa09f273f887?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    bidHistory: [
      { user: 'photo_collector', amount: 250000, time: '10분 전' },
      { user: 'vintage_lover', amount: 240000, time: '15분 전' },
      { user: 'camera_enthusiast', amount: 230000, time: '30분 전' },
      { user: 'film_photographer', amount: 220000, time: '45분 전' },
      { user: 'retro_gear', amount: 210000, time: '1시간 전' },
    ],
  };

  return (
    <div className="container py-6 md:py-10">
      <HomeNavLink />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {/* 경매품 이미지 갤러리 섹션 */}
          <AuctionGoodsImageGallerySection
            images={auction.images}
            title={auction.title}
          />

          {/* 경매품 정보 섹션 */}
          <AuctionGoodsInfoSection
            description={auction.description}
            seller={auction.seller}
          />
        </div>

        <div className="space-y-6">
          {/* 입찰 액션 섹션 */}
          <BidActionSection
            title={auction.title}
            activeBidders={auction.activeBidders}
            currentBid={auction.currentBid}
            minBidIncrement={auction.minBidIncrement}
            timeLeft={auction.timeLeft}
            views={auction.views}
          />

          {/* 입찰 기록 섹션  */}
          <BidHistorySection bidHistory={auction.bidHistory} />
        </div>
      </div>
    </div>
  );
}
