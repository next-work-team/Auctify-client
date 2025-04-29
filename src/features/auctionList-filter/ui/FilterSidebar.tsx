'use client';

import { Accordion } from '@/shared/ui/Accordion';

import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';
import ConditionFilter from './ConditionFilter';
import AuctionStatusFilter from './AuctionStatusFilter';

export default function FilterSidebar() {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="hidden md:block bg-card rounded-lg border p-4">
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
          <CategoryFilter />

          {/* 가격 범위 필터 */}
          <PriceRangeFilter />

          {/* 제품 상태 필터 */}
          <ConditionFilter />

          {/* 경매 상태 필터 */}
          <AuctionStatusFilter />
        </Accordion>
      </div>
    </aside>
  );
}
