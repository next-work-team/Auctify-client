'use client';

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

import { useAuctionListQuery } from '../hooks/useAuctionListQuery';

// import FilterSection from './FilterSection';

export default function AuctionListTopSection() {
  const { data } = useAuctionListQuery();

  return (
    <section className="container py-4 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">경매 목록</h1>
        <p className="text-muted-foreground mt-1">
          총 {data?.pages[0].data.totalElements}개의 경매가 진행 중입니다
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
            <div className="py-4">{/* <FilterSection /> */}</div>
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
    </section>
  );
}
