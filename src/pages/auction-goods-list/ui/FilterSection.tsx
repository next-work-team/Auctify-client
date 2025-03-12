'use client';

import { Dispatch, SetStateAction } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';
import { Slider } from '@/shared/ui/Slider';
import { Input } from '@/shared/ui/input';

import { Filter } from '../models/types';
import {
  AUCTION_STATUS_FILTER_OPTIONS,
  CATEGORY_FILTER_OPTIONS,
  CONDITION_FILTER_OPTIONS,
} from '../config/constants';

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

function CategoryFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="category">
      <AccordionTrigger>카테고리</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {CATEGORY_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filter.categories.includes(option.value)}
              onCheckedChange={(checked) => {
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  categories: checked
                    ? [...prevFilter.categories, option.value]
                    : prevFilter.categories.filter(
                        (category) => category !== option.value,
                      ),
                }));
              }}
            />
            <Label htmlFor={option.value} className="text-sm font-normal">
              {option.label}
            </Label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

function PriceRangeFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="priceRange">
      <AccordionTrigger>가격 범위</AccordionTrigger>
      <AccordionContent className="py-4 space-y-4">
        {filter.priceRange.min !== null && filter.priceRange.max !== null && (
          <Slider
            max={filter.priceRange.max}
            step={10000}
            value={[filter.priceRange.min, filter.priceRange.max]}
            onValueChange={(value) =>
              setFilter((prevFilter) => ({
                ...prevFilter,
                priceRange: { min: value[0], max: value[1] },
              }))
            }
          />
        )}

        <div className="flex items-center justify-between">
          <div className="w-[45%]">
            <Label htmlFor="min-price" className="text-xs">
              최소
            </Label>
            <Input
              id="min-price"
              type="number"
              value={filter.priceRange.min}
              onChange={(e) =>
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  priceRange: {
                    ...prevFilter.priceRange,
                    min: Number(e.target.value),
                  },
                }))
              }
              className="h-8"
            />
          </div>
          <span className="text-muted-foreground">-</span>
          <div className="w-[45%]">
            <Label htmlFor="max-price" className="text-xs">
              최대
            </Label>
            <Input
              id="max-price"
              type="number"
              value={filter.priceRange.max ?? ''}
              onChange={(e) =>
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  priceRange: {
                    ...prevFilter.priceRange,
                    max: e.target.value ? Number(e.target.value) : null,
                  },
                }))
              }
              className="h-8"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function ConditionFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="condition">
      <AccordionTrigger>상품 상태</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {CONDITION_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filter.condition.includes(option.value)}
              onCheckedChange={(checked) => {
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  condition: checked
                    ? [...prevFilter.condition, option.value]
                    : prevFilter.condition.filter(
                        (conditionItem) => conditionItem !== option.value,
                      ),
                }));
              }}
            />
            <Label htmlFor={option.value} className="text-sm font-normal">
              {option.label}
            </Label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

function AuctionStatusFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="status">
      <AccordionTrigger>경매 상태</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {AUCTION_STATUS_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filter.auctionStatus.includes(option.value)}
              onCheckedChange={(checked) => {
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  auctionStatus: checked
                    ? [...prevFilter.auctionStatus, option.value]
                    : prevFilter.auctionStatus.filter(
                        (statusItem) => statusItem !== option.value,
                      ),
                }));
              }}
            />
            <Label htmlFor={option.value} className="text-sm font-normal">
              {option.label}
            </Label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

// function SellerFilter() {
//   return (
//     <AccordionItem value="seller">
//       <AccordionTrigger>판매자</AccordionTrigger>
//       <AccordionContent>
//         <div className="space-y-3">
//           <div className="relative">
//             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//             <Input placeholder="판매자 검색" className="pl-8" />
//           </div>
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <Checkbox id="verified-seller" />
//               <Label htmlFor="verified-seller" className="text-sm font-normal">
//                 매너온도가 50도 이상 판매자
//               </Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox id="top-rated" />
//               <Label htmlFor="top-rated" className="text-sm font-normal">
//                 인증된 판매자
//               </Label>
//             </div>
//           </div>
//         </div>
//       </AccordionContent>
//     </AccordionItem>
//   );
// }
