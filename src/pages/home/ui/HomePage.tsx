import BannerSection from './BannerSection';
import ClosingSoonAuctionSection from './ClosingSoonAuctionSection';
import PopularAuctionSection from './PopularAuctionSection';
import CategorySection from './CategorySection';
import HowToUseSection from './HowToUseSection';

export default function HomePage() {
  return (
    <div className="mx-auto">
      <BannerSection />
      {/* 마감 임박 경매 섹션 */}
      <ClosingSoonAuctionSection />
      {/* 인기 경매 섹션 */}
      <PopularAuctionSection />
      {/* 카테고리 섹션 */}
      <CategorySection />
      {/* 경매 이용 방법 섹션 */}
      <HowToUseSection />
    </div>
  );
}
