import { Filter } from 'lucide-react';

import { Button } from '@/shared/ui';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/Sheet';

import { getAuctionGoodsList } from '../api/getAuctionGoodsList';

import AuctionGoodsFilters from './AuctionGoodsFilters';
import GirdView from './GirdView';
import ActiveAuctionGoodsFilters from './ActiveAuctionGoodsFilters';
import SortDropdown from './SortDropdown';
import GirdListToggle from './GirdListToggle';

export async function AuctionGoodsListPage() {
  const data = await getAuctionGoodsList();
  console.log(data);

  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">경매 목록</h1>
          <p className="text-muted-foreground mt-1">
            총 {data.length}개의 경매가 진행 중입니다
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                필터
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetDescription>
                  <SheetTitle>필터</SheetTitle>
                  원하는 조건으로 경매 아이템을 필터링하세요.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <AuctionGoodsFilters />
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  필터 초기화
                </Button>
                <SheetClose asChild>
                  <Button size="sm">적용하기</Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        <div className="hidden md:block">
          <AuctionGoodsFilters />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative w-full sm:max-w-xs">
              {/* <Input placeholder="경매 검색..." className="w-full" /> */}
            </div>

            <div className="flex items-center gap-4">
              {/* 정렬 드롭다운 */}
              <SortDropdown />

              {/* 그리드 뷰, 리스트 뷰 토글 버튼 섹션 */}
              <GirdListToggle />
            </div>
          </div>

          {/* 활성화된 경매 필터 */}
          <ActiveAuctionGoodsFilters />

          {/* TODO viewType 상태관리 */}
          {/* 그리드 뷰 */}
          {'grid' === 'grid' && <GirdView auctionGoods={data} />}

          {/* 리스트 뷰 */}
          {/* {viewType === 'list' && <ListView auctionGoods={data} />} */}
        </div>
      </div>
    </div>
  );
}
