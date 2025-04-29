import FilterSidebar from '@/features/auctionList-filter/ui/FilterSidebar';
import ActiveFilterSection from '@/features/auctionList-filter/ui/ActiveFilterSection';
import SortDropdown from '@/features/auctionList-filter/ui/SortDropdown';
import SearchInput from '@/features/auctionList-filter/ui/SearchInput';
import ViewTypeToggle from '@/features/auctionList-view/ui/ViewTypeToggle';

import AuctionListContainer from './container/AuctionListContainer';
import AuctionListTopSection from './AuctionListTopSection';

export function AuctionListPage() {
  return (
    <>
      {/* 경매 리스트 상단 섹션 */}
      <AuctionListTopSection />

      {/* 경매 리스트 - 컨텐츠 섹션 */}
      <div className="container grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        {/* 경매 리스트 필터 섹션 */}
        <FilterSidebar />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* 경매 리스트 검색 */}
            <SearchInput />

            <div className="flex items-center gap-4">
              {/* 정렬 드롭다운 */}
              <SortDropdown />

              {/* 그리드 뷰, 리스트 뷰 토글 버튼 섹션 */}
              <ViewTypeToggle />
            </div>
          </div>

          {/* 활성화된 경매 필터 섹션 */}
          <ActiveFilterSection />

          {/* 경매 리스트 데이터 페칭 컴포넌트 */}
          <AuctionListContainer />
        </div>
      </div>
    </>
  );
}
