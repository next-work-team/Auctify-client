'use client';

import { Dispatch, SetStateAction } from 'react';

import { Accordion } from '@/shared/ui/Accordion';

import { Filter } from '../../../pages/auctions-list/types';

import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';
import ConditionFilter from './ConditionFilter';
import AuctionStatusFilter from './AuctionStatusFilter';

export default function FilterSection({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="hidden md:block bg-card rounded-lg border p-4">
      {/* <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="md:hidden mb-4"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="flex w-full justify-between p-0 h-auto"
          >
            <span className="font-semibold">필터</span>
            <span className="text-xs">{isOpen ? '접기' : '펼치기'}</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <FilterContent
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </CollapsibleContent>
      </Collapsible> */}

      <div className="hidden md:block">
        <h3 className="font-semibold mb-4">필터</h3>
        <Accordion
          type="multiple"
          defaultValue={['category', 'priceRange', 'condition', 'status']}
        >
          {/* 카테고리 필터 */}
          <CategoryFilter filter={filter} setFilter={setFilter} />

          {/* 가격 범위 필터 */}
          <PriceRangeFilter filter={filter} setFilter={setFilter} />

          {/* 제품 상태 필터 */}
          <ConditionFilter filter={filter} setFilter={setFilter} />

          {/* 경매 상태 필터 */}
          <AuctionStatusFilter filter={filter} setFilter={setFilter} />
        </Accordion>
      </div>
    </div>
  );
}
