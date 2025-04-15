'use client';

import { useState } from 'react';
import FilterSection from '@features/auctionList-filter/ui/FilterSection';
import ActiveFilterSection from '@features/auctionList-filter/ui/ActiveFilterSection';
import SortDropdown from '@features/auctionList-filter/ui/SortDropdown';
import SearchInput from '@features/auctionList-filter/ui/SearchInput';

import { Auction, Filter, SortingMethod, ViewType } from '../types';

import AuctionGrid from './AuctionGrid';
import GirdListToggle from './GirdListToggle';
import AuctionList from './AuctionList';
import AuctionListTopSection from './AuctionListHeader';

export const defaultFilter: Readonly<Filter> = {
  categories: [],
  priceRange: { min: 0, max: null },
  condition: [],
  auctionStatus: [],
};

export function AuctionListPage() {
  // TODO viewType 상태관리
  const [viewType, setViewType] = useState<ViewType>('grid');
  // TODO sortingMethod 상태관리
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortingMethod, setSortingMethod] =
    useState<SortingMethod>('ending-soon');
  // TODO searchInputValue 상태관리
  const [searchInputValue, setSearchInputValue] = useState('');
  // TODO activeFilter 상태관리
  const [filter, setFilter] = useState<Filter>(defaultFilter);

  // mock data
  const data: Auction[] = [
    {
      id: '1',
      title: '빈티지 카메라 컬렉션',
      currentBid: 250000,
      image: 'https://placehold.co/400x300',
      timeLeft: '2시간 30분',
      bidCount: 18,
      category: '전자제품',
      condition: '중고',
      seller: '카메라마스터',
      isLike: true,
    },
    {
      id: '2',
      title: '한정판 스니커즈',
      currentBid: 180000,
      image: 'https://placehold.co/400x300',
      timeLeft: '1일 4시간',
      bidCount: 24,
      category: '패션',
      condition: '새제품',
      seller: '슈즈컬렉터',
      isLike: true,
    },
    {
      id: '3',
      title: '명품 시계',
      currentBid: 1250000,
      image: 'https://placehold.co/400x300',
      timeLeft: '5시간 15분',
      bidCount: 32,
      category: '쥬얼리',
      condition: '중고',
      seller: '타임마스터',
      isLike: true,
    },
    {
      id: '4',
      title: '아트 프린트 세트',
      currentBid: 85000,
      image: 'https://placehold.co/400x300',
      timeLeft: '3일 12시간',
      bidCount: 7,
      category: '예술/미술',
      condition: '새제품',
      seller: '아트갤러리',
      isLike: true,
    },
    {
      id: '5',
      title: '빈티지 LP 레코드',
      currentBid: 120000,
      image: 'https://placehold.co/400x300',
      timeLeft: '8시간 45분',
      bidCount: 15,
      category: '수집품',
      condition: '중고',
      seller: '뮤직컬렉터',
      isLike: false,
    },
    ...Array.from({ length: 27 }, (_, i) => ({
      id: `${i + 6}`,
      title: `경매 물품 ${i + 6}`,
      currentBid: (i + 6) * 10000,
      image: 'https://placehold.co/400x300',
      timeLeft: `${i + 6}시간 4${i + 6}분`,
      bidCount: i + 6,
      category: '전자기기',
      condition: '중고',
      seller: `판매자 ${i + 6}`,
      isLike: false,
    })),
  ];

  return (
    <>
      {/* 경매 리스트 상단 섹션 */}
      <AuctionListTopSection length={data.length} />

      {/* 경매 리스트 - 컨텐츠 섹션 */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        {/* 경매 리스트 필터 섹션 */}
        <FilterSection filter={filter} setFilter={setFilter} />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* 경매 리스트 검색 */}
            <SearchInput
              searchInputValue={searchInputValue}
              setSearchInputValue={setSearchInputValue}
            />

            <div className="flex items-center gap-4">
              {/* 정렬 드롭다운 */}
              <SortDropdown setSortingMethod={setSortingMethod} />

              {/* 그리드 뷰, 리스트 뷰 토글 버튼 섹션 */}
              <GirdListToggle viewType={viewType} setViewType={setViewType} />
            </div>
          </div>

          {/* 활성화된 경매 필터 섹션 */}
          <ActiveFilterSection filter={filter} setFilter={setFilter} />

          {/* 그리드 뷰 */}
          {viewType === 'grid' && <AuctionGrid auctions={data} />}

          {/* 리스트 뷰 */}
          {viewType === 'list' && <AuctionList auctions={data} />}
        </div>
      </section>
    </>
  );
}
